import { TextInput } from "@tremor/react";
import { useContext } from "react";
import { GraphContext } from "../GraphContext";
import { blurItem, unblurItem } from "../utils";

/** Search box component for highlighting nodes on graph */
const SearchBox = () => {
	/** using `GraphContext` */
	const context = useContext(GraphContext);
	if (!context.graph) return <></>;
	const { graph } = context;

	/** Search for nodes with matching query */
	const searchNode = (query: string) => {
		/** Fit graph to view before searching */
		graph.fitView();

		const results = [];

		/** Get all nodes */
		const allNodes = graph.getNodes();
		/** Get all edges */
		const allEdges = graph.getEdges();

		/** Iterating through nodes to find matching nodes */
		for (const node of allNodes) {
			const model = node.getModel();
			if (model.id?.includes(query)) {
				/** Puush to results array */
				results.push(node);
			}
		}

		/** Blur all items */
		allEdges.map((item) => blurItem(graph, item));
		allNodes.map((item) => blurItem(graph, item));

		/** Unblur result items */
		results.map((item) => unblurItem(graph, item));
	};

	return (
		<TextInput
			className="w-24"
			placeholder="Search for node..."
			onChange={(event) => searchNode(event.target.value)}
		/>
	);
};

export default SearchBox;
