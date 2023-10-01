"use client";

import { Address, AddressTypeFull, NumberAggregate } from "@/types";
import { Graph, NodeConfig } from "@antv/g6";
import { useQuery } from "@apollo/client";
import GetFullAddressStat from "@/graphql/dashboard/addresses/stat/GetFullAddressStat.gql";
import { Card, Text } from "@tremor/react";
import { WeiToETH } from "@/utils";
import Link from "next/link";
import { useContext } from "react";
import { GraphContext } from "../GraphContext";
import { reduceData } from "../utils";

import { apolloClient } from "@/apollo/client-provider";
import GetTransactionEdgeAggregate from "@/graphql/dashboard/addresses/transactions/GetTransactionEdgeAggregate.gql";

export type INodeActionMenuModel = Partial<NodeConfig> & {
	data: Address;
};

export interface INodeActionMenuProps {
	model: INodeActionMenuModel;
	graph?: Graph;
}

interface TransactionsAggregate {
	count: number;
	node: {
		value: NumberAggregate;
	};
}

const NodeActionMenu = ({ model, graph }: INodeActionMenuProps) => {
	const { data: modelData } = model;
	if (!modelData) return;
	const address = modelData.address;

	const extendData = async () => {
		const { data } = await apolloClient.query({
			query: GetTransactionEdgeAggregate,
			variables: {
				address,
			},
		});
		let updated = 0;
		const { nodes, edges } = reduceData(data);
		for (const node of nodes) {
			if (!graph?.findById(node.id)) {
				graph?.addItem("node", node);
				updated += 1;
			}
		}
		for (const edge of edges) {
			if (!graph?.findById(edge.id)) {
				graph?.addItem("edge", edge);
				updated += 1;
			}
		}
		if (updated > 0) {
			graph?.layout();
			graph?.refresh();
		}
	};

	const centerNode = () => {
		graph.focusItem(graph.findById(address));
	};

	return (
		// <Text className="text-xs">No actions!</Text>
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
