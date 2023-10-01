import React, {
	LegacyRef,
	ReactNode,
	createContext,
	useEffect,
	useState,
} from "react";
import G6, {
	EdgeConfig,
	G6GraphEvent,
	Graph,
	GraphOptions,
	LayoutConfig,
	NodeConfig,
} from "@antv/g6";
import { useWindowSize } from "usehooks-ts";

import "./register-shapes";
import { graphOptions } from "./graph-options";
import { layouts } from "./graph-layouts";
import { registerEventShowPathOnHover } from "./register-events";

import { useQuery } from "@apollo/client";
import GetTransactionEdgeAggregate from "@/graphql/dashboard/addresses/transactions/GetTransactionEdgeAggregate.gql";
import { reduceData } from "./utils";
import { TransactionEdgeAggregate } from "@/types";

interface GraphContextProps {
	graphRef: {
		ref: HTMLDivElement;
		setRef: React.Dispatch<React.SetStateAction<HTMLDivElement>>;
	};
	address: string;
	graph: Graph;
	data: {
		transactionEdgeAggregate: TransactionEdgeAggregate;
	};
	loading: boolean;
	error: any;
	edgeMenu: {
		showEdgeMenu: boolean;
		setShowEdgeMenu: React.Dispatch<React.SetStateAction<boolean>>;
		selectedEdge: EdgeConfig | null;
		setSelectedEdge: React.Dispatch<
			React.SetStateAction<EdgeConfig | null>
		>;
	};
	nodeMenu: {
		showNodeMenu: boolean;
		setShowNodeMenu: React.Dispatch<React.SetStateAction<boolean>>;
		selectedNode?: NodeConfig | null;
		setSelectedNode: React.Dispatch<
			React.SetStateAction<NodeConfig | null>
		>;
	};
	layout: {
		layout: LayoutConfig;
		setLayout: React.Dispatch<React.SetStateAction<LayoutConfig>>;
	};
}

export const GraphContext = createContext<Partial<GraphContextProps>>({});

export const GraphContextProvider = ({
	children,
	address,
}: {
	children: ReactNode;
	address: string;
}) => {
	const { width, height } = useWindowSize();
	const [graph, setGraph] = useState<Graph>();
	const [ref, setRef] = useState<HTMLDivElement>();
	const [layout, setLayout] = useState<LayoutConfig>(layouts[0]);

	const layoutState = {
		layout,
		setLayout,
	};

	const [showEdgeMenu, setShowEdgeMenu] = useState(false);
	const [selectedEdge, setSelectedEdge] = useState<EdgeConfig | null>(null);

	const [showNodeMenu, setShowNodeMenu] = useState(false);
	const [selectedNode, setSelectedNode] = useState<NodeConfig | null>(null);

	const edgeMenu = {
		showEdgeMenu,
		setShowEdgeMenu,
		selectedEdge,
		setSelectedEdge,
	};

	const nodeMenu = {
		showNodeMenu,
		setShowNodeMenu,
		selectedNode,
		setSelectedNode,
	};

	const registerEventMenu = (graph: Graph) => {
		graph.on("edge:click", (evt: G6GraphEvent) => {
			const { item } = evt;
			const model = item.getModel() as EdgeConfig;
			setShowEdgeMenu(true);
			setShowNodeMenu(false);
			setSelectedEdge(model);
		});

		graph.on("node:click", (evt: G6GraphEvent) => {
			const { item } = evt;
			const model = item.getModel() as NodeConfig;
			setShowEdgeMenu(false);
			setShowNodeMenu(true);
			setSelectedNode(model);
		});

		graph.on("canvas:click", () => {
			setShowNodeMenu(false);
			setShowEdgeMenu(false);
		});
	};

	const { data, loading, error } = useQuery(GetTransactionEdgeAggregate, {
		variables: {
			address,
		},
	});

	useEffect(() => {
		if (ref != undefined && !graph) {
			const options: GraphOptions = {
				container: ref,
				...graphOptions,
				layout,
			};
			setGraph(new G6.Graph(options));
		}
	}, [graph, layout, ref]);

	useEffect(() => {
		const loadGraph = async () => {
			if (graph) {
				graph.data(reduceData(data));
				graph.render();
				registerEventShowPathOnHover(graph);
				registerEventMenu(graph);
			}
		};
		loadGraph();
	}, [graph, data]);

	useEffect(() => {
		if (graph) {
			graph.updateLayout(layout);
			graph.refresh();
		}
	}, [layout, graph]);

	useEffect(() => {
		if (ref) {
			graph?.changeSize(ref.offsetWidth, ref.offsetHeight);
		}
	}, [graph, width, height, ref]);

	const value = {
		graphRef: {
			ref,
			setRef,
		},
		address,
		graph,
		data,
		loading,
		error,
		nodeMenu,
		edgeMenu,
		layout: layoutState,
	};

	return (
		<GraphContext.Provider value={value}>{children}</GraphContext.Provider>
	);
};
