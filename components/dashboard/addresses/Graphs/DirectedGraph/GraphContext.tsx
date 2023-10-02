import React, {
	ReactNode,
	createContext,
	useEffect,
	useState,
	Dispatch,
	SetStateAction,
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

/** Importing for graph initializatoin */
import "./register-shapes";
import { graphOptions } from "./graph-options";
import { layouts } from "./graph-layouts";
import {
	registerEventShowPathOnHover,
	registerEventShowPathOnTouch,
} from "./register-events";

import { useQuery } from "@apollo/client";
import { reduceData } from "./utils";
import { TransactionEdgeAggregate } from "@/types";
import GetTransactionEdgeAggregate from "@/graphql/dashboard/addresses/transactions/GetTransactionEdgeAggregate.gql";

/** Define `GraphContext` structure */
interface GraphContextProps {
	graphRef: {
		ref: HTMLDivElement;
		setRef: Dispatch<SetStateAction<HTMLDivElement>>;
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
		setShowEdgeMenu: Dispatch<SetStateAction<boolean>>;
		selectedEdge: EdgeConfig | null;
		setSelectedEdge: Dispatch<SetStateAction<EdgeConfig | null>>;
	};
	nodeMenu: {
		showNodeMenu: boolean;
		setShowNodeMenu: Dispatch<SetStateAction<boolean>>;
		selectedNode?: NodeConfig | null;
		setSelectedNode: Dispatch<SetStateAction<NodeConfig | null>>;
	};
	layout: {
		layout: LayoutConfig;
		setLayout: Dispatch<SetStateAction<LayoutConfig>>;
	};
}

/** `GraphContext` */
export const GraphContext = createContext<Partial<GraphContextProps>>({});

interface IGraphContextProviderProps {
	children: ReactNode;
	address: string;
}

/** `GraphContext.Provider` wrapper */
export const GraphContextProvider = ({
	children,
	address,
}: IGraphContextProviderProps) => {
	/** `useWindowSize` hook to resize graph for responsive layout */
	const { width, height } = useWindowSize();
	/** Store graph instance */
	const [graph, setGraph] = useState<Graph>();
	/** Using `useState` in place of `useRef` to allow us to set graph container element */
	const [ref, setRef] = useState<HTMLDivElement>();
	/** Store graph layout */
	const [layout, setLayout] = useState<LayoutConfig>(layouts[0]);

	/** Toggling edge menu */
	const [showEdgeMenu, setShowEdgeMenu] = useState(false);
	/** Storing selected edge */
	const [selectedEdge, setSelectedEdge] = useState<EdgeConfig | null>(null);
	/** Toggling node menu */
	const [showNodeMenu, setShowNodeMenu] = useState(false);
	/** Storing selected node */
	const [selectedNode, setSelectedNode] = useState<NodeConfig | null>(null);

	/** Registering menu events */
	const registerEventMenu = (graph: Graph) => {
		/** Register edge click
		 *
		 * Show edge menu
		 */
		graph.on("edge:click", (evt: G6GraphEvent) => {
			const { item } = evt;
			const model = item.getModel() as EdgeConfig;
			setShowEdgeMenu(true);
			setShowNodeMenu(false);
			setSelectedEdge(model);
		});

		/** Register edge touch
		 *
		 * Show edge menu
		 */
		graph.on("edge:touchstart", (evt: G6GraphEvent) => {
			const { item } = evt;
			const model = item.getModel() as EdgeConfig;
			setShowEdgeMenu(true);
			setShowNodeMenu(false);
			setSelectedEdge(model);
		});

		/** Register node click
		 *
		 * Show node menu
		 */
		graph.on("node:click", (evt: G6GraphEvent) => {
			const { item } = evt;
			const model = item.getModel() as NodeConfig;
			setShowEdgeMenu(false);
			setShowNodeMenu(true);
			setSelectedNode(model);
		});

		/** Register node touch
		 *
		 * Show node menu
		 */
		graph.on("node:touchstart", (evt: G6GraphEvent) => {
			const { item } = evt;
			const model = item.getModel() as NodeConfig;
			setShowEdgeMenu(false);
			setShowNodeMenu(true);
			setSelectedNode(model);
		});

		/** Register canvas click */
		graph.on("canvas:click", () => {
			/** Close node menu and edge menu */
			setShowNodeMenu(false);
			setShowEdgeMenu(false);
		});
	};

	/** Load transaction edge aggregate data */
	const { data, loading, error } = useQuery(GetTransactionEdgeAggregate, {
		variables: {
			address,
		},
	});

	/** Initialize graph after graph container element has been rendered */
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

	/** Load data and register events after graph has been initialized */
	useEffect(() => {
		if (graph) {
			graph.data(reduceData(data));
			graph.render();
			registerEventShowPathOnHover(graph);
			registerEventShowPathOnTouch(graph);
			registerEventMenu(graph);
		}
	}, [graph, data]);

	/** Update layout on graph layout changes */
	useEffect(() => {
		if (graph) {
			graph.updateLayout(layout);
			graph.refresh();
		}
	}, [layout, graph]);

	/** Update graph size to fit container after window size changes */
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
		edgeMenu: {
			showEdgeMenu,
			setShowEdgeMenu,
			selectedEdge,
			setSelectedEdge,
		},
		nodeMenu: {
			showNodeMenu,
			setShowNodeMenu,
			selectedNode,
			setSelectedNode,
		},
		layout: {
			layout,
			setLayout,
		},
	};

	return (
		<GraphContext.Provider value={value}>{children}</GraphContext.Provider>
	);
};
