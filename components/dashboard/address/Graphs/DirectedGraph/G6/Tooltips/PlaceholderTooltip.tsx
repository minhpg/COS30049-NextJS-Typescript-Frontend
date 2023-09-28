import { Graph } from "@antv/g6";
import { Text } from "@tremor/react";

const PlaceholderTooltip = ({ graph }: { graph?: Graph }) => {
  if (!graph) return <Text className="text-xs">Graph not rendered!</Text>;
  return (
    <div>
      <Text className="text-xs">
        <span className="font-light">Nodes: </span>
        <span className="text-tremor-brand">{graph.getNodes().length}</span>
      </Text>
      <Text className="text-xs">
        <span className="font-light">Edges: </span>
        <span className="text-tremor-brand">{graph.getEdges().length}</span>
      </Text>
    </div>
  );
};

export default PlaceholderTooltip;
