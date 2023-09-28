import { Graph } from "@antv/g6";
import { Text } from "@tremor/react";

const DefaultContextMenu = ({ graph }: { graph?: Graph }) => {
  if (!graph) return <Text className="text-xs">Graph not rendered!</Text>;
  return (
    <div>
      <Text className="text-xs">
        Click a node or edge to see available actions!
      </Text>
    </div>
  );
};

export default DefaultContextMenu;
