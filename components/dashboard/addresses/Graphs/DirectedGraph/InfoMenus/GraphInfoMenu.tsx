import { Graph } from "@antv/g6";
import { Text } from "@tremor/react";

/** Display graph info */
const GraphInfoMenu = ({ graph }: { graph?: Graph }) => {
	if (!graph) return <Text className="text-xs">Graph not rendered!</Text>;
	const nodes = graph.getNodes();
	const edges = graph.getEdges();
	return (
		<div>
			<Text className="text-sm font-semibold">Current Graph</Text>
			<Text className="text-xs">
				<span className="font-light">Renderer: </span>
				<span className="text-tremor-brand">
					{graph.getDefaultCfg().renderer}
				</span>
			</Text>
			<Text className="text-xs">
				<span className="font-light">Nodes: </span>
				<span className="text-tremor-brand">{nodes.length}</span>
			</Text>
			<Text className="text-xs">
				<span className="font-light">Edges: </span>
				<span className="text-tremor-brand">{edges.length}</span>
			</Text>
		</div>
	);
};

export default GraphInfoMenu;
