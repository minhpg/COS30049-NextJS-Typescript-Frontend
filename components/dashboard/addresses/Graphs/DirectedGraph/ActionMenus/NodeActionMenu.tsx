"use client";

import { Graph, NodeConfig } from "@antv/g6";
import { Text } from "@tremor/react";

import { Address } from "@/types";
import { apolloClient } from "@/apollo/client-provider";
import { reduceData } from "../utils";
import GetTransactionEdgeAggregate from "@/graphql/dashboard/addresses/transactions/GetTransactionEdgeAggregate.gql";

/** Extending `NodeConfig` interface to append data to node model */
export type INodeActionMenuModel = Partial<NodeConfig> & {
	data: Address;
};

export interface INodeActionMenuProps {
	model: INodeActionMenuModel;
	graph?: Graph;
}

/** Node actions - focus on node, extend paths*/
const NodeActionMenu = ({ model, graph }: INodeActionMenuProps) => {
	/** Destructure data from node model */
	const { data: modelData } = model;
	if (!modelData) return;

	/** Get selected address */
	const address = modelData.address;

	/** Extending paths */
	const extendData = async () => {
		/** Load transaction edge aggregate data for selected address */
		const { data } = await apolloClient.query({
			query: GetTransactionEdgeAggregate,
			variables: {
				address,
			},
		});
		/** Count number of updated items */
		let updated = 0;

		/** Destructure nodes and edges after reducing from response */
		const { nodes, edges } = reduceData(data);

		/** Check of node exists then add to graph */
		for (const node of nodes) {
			if (!graph?.findById(node.id)) {
				graph?.addItem("node", node);
				updated += 1;
			}
		}

		/** Check of edge exists then add to graph */
		for (const edge of edges) {
			if (!graph?.findById(edge.id)) {
				graph?.addItem("edge", edge);
				updated += 1;
			}
		}

		/** Only relayout and refresh graph if more then 0 items are updated */
		if (updated > 0) {
			graph?.layout();
			graph?.refresh();
		}
	};

	/** Center onto selected node */
	const centerNode = () => {
		graph.focusItem(graph.findById(address));
	};

	return (
		<div className="mt-3">
			<Text className="text-xs">Node Actions</Text>
			<a onClick={extendData}>
				<Text className="text-xs text-tremor-brand hover:underline">
					View further transaction paths
				</Text>
			</a>
			<a onClick={centerNode}>
				<Text className="text-xs text-tremor-brand hover:underline">
					Center node
				</Text>
			</a>
		</div>
	);
};

export default NodeActionMenu;
