import { Graph, IEdge, INode } from "@antv/g6";
import { blurItem, unblurItem } from "./utils";
export const registerEvents = (graph: Graph) => {
	registerEventShowPathOnHover(graph);
};

export const registerEventShowPathOnHover = (graph: Graph) => {
	const blurAllItems = () => {
		graph.getNodes().map((item) => blurItem(graph, item));
		graph.getEdges().map((item) => blurItem(graph, item));
	};

	const unblurAllItems = () => {
		graph.getNodes().map((item) => unblurItem(graph, item));
		graph.getEdges().map((item) => unblurItem(graph, item));
	};

	graph.on("edge:mouseleave", (ev) => {
		unblurAllItems();
		graph.paint();
	});

	graph.on("node:mouseleave", (ev) => {
		unblurAllItems();
		graph.paint();
	});

	// Mouse enters an edge
	graph.on("edge:mouseenter", (ev) => {
		blurAllItems();
		const edge = ev.item as IEdge;
		const source = edge.getSource();
		const target = edge.getTarget();
		edge.show();
		unblurItem(graph, edge);
		unblurItem(graph, source);
		unblurItem(graph, target);
		graph.paint();
	});

	graph.on("node:mouseenter", (ev) => {
		blurAllItems();
		const node = ev.item as INode;
		const edges = node.getEdges();
		edges.forEach((edge) => {
			unblurItem(graph, edge);
			unblurItem(graph, edge.getSource());
			unblurItem(graph, edge.getTarget());
		});
		graph.paint();
	});
};
