import { Graph } from "@antv/g6";
import { Text } from "@tremor/react";

const GraphActionMenu = ({ graph }: { graph?: Graph }) => {
	if (!graph) return <Text className="text-xs">Graph not rendered!</Text>;
	return (
		<div className="mt-3">
			<Text className="text-xs">Graph Actions</Text>
			<div>
				<a onClick={() => graph.fitView()}>
					<Text className="text-xs text-tremor-brand hover:underline">
						Fit View
					</Text>
				</a>
				<a onClick={() => graph.fitCenter()}>
					<Text className="text-xs text-tremor-brand hover:underline">
						Fit Center
					</Text>
				</a>
			</div>
		</div>
	);
};

export default GraphActionMenu;
