/** Register graph events */
import { Graph, IEdge, INode } from "@antv/g6";
import { blurAllItems, blurItem, unblurAllItems, unblurItem } from "./utils";

/** Blur all items except hovered paths and nodes */
export const registerEventShowPathOnHover = (graph: Graph) => {
	/** Register mouse leave edge */
	graph.on("edge:mouseleave", (ev) => {
		unblurAllItems(graph);
		graph.paint();
	});

	/** Register mouse leave node */
	graph.on("node:mouseleave", (ev) => {
		unblurAllItems(graph);
		graph.paint();
	});

	/** Register hover edge */
	graph.on("edge:mouseenter", (ev) => {
		blurAllItems(graph);
		const edge = ev.item as IEdge;
		const source = edge.getSource();
		const target = edge.getTarget();
		edge.show();
		unblurItem(graph, edge);
		unblurItem(graph, source);
		unblurItem(graph, target);
		graph.paint();
	});

	/** Register hover node */
	graph.on("node:mouseenter", (ev) => {
		unblurAllItems(graph);
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

/** Blur all items except hovered paths and nodes */
export const registerEventShowPathOnTouch = (graph: Graph) => {
	/** Register touch edge */
	graph.on("edge:touchstart", (ev) => {
		blurAllItems(graph);
		const edge = ev.item as IEdge;
		const source = edge.getSource();
		const target = edge.getTarget();
		edge.show();
		unblurItem(graph, edge);
		unblurItem(graph, source);
		unblurItem(graph, target);
		graph.paint();
	});

	/** Register touch node */
	graph.on("node:touchstart", (ev) => {
		blurAllItems(graph);
		const node = ev.item as INode;
		const edges = node.getEdges();
		edges.forEach((edge) => {
			unblurItem(graph, edge);
			unblurItem(graph, edge.getSource());
			unblurItem(graph, edge.getTarget());
		});
		graph.paint();
	});

	/** Register canvas click */
	graph.on("canvas:touchstart", () => {
		unblurAllItems(graph);
	});
};
