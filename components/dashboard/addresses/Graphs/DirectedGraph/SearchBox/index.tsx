import { TextInput } from "@tremor/react";
import { useContext } from "react";
import { GraphContext } from "../GraphContext";
import { blurItem, unblurItem } from "../utils";

const SearchBox = () => {
	const context = useContext(GraphContext);
	if (!context.graph) return <></>;
	const { graph } = context;
	const searchNode = (query: string) => {
		graph.fitView();
		const results = [];
		const allNodes = graph.getNodes();
		const allEdges = graph.getEdges();
		for (const node of allNodes) {
			const model = node.getModel();
			if (model.id?.includes(query)) {
				results.push(node);
			}
		}
		allEdges.map((item) => blurItem(graph, item));
		allNodes.map((item) => blurItem(graph, item));
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
