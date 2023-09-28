import { EdgeConfig, Graph, NodeConfig } from "@antv/g6";
import PlaceholderTooltip from "./PlaceholderTooltip";
import { Card } from "@tremor/react";
import EdgeTooltip, { IEdgeTooltipModel } from "./EdgeTooltip";
import NodeTooltip, { INodeTooltipModel } from "./NodeTooltip";

interface ITooltipsProps {
  graph?: Graph;
  showEdgeTooltip: boolean;
  showNodeTooltip: boolean;
  selectedEdge: EdgeConfig;
  selectedNode: NodeConfig;
}
const Tooltips = ({
  graph,
  showEdgeTooltip,
  showNodeTooltip,
  selectedEdge,
  selectedNode,
}: ITooltipsProps) => {
  return (
    <Card
      className="z-20 w-80 break-all p-5 absolute min-h-24"
      style={{ top: 15, left: 15 }}
    >
      {showEdgeTooltip || showNodeTooltip ? (
        <></>
      ) : (
        <PlaceholderTooltip graph={graph} />
      )}
      {showEdgeTooltip && (
        <EdgeTooltip model={selectedEdge as IEdgeTooltipModel} />
      )}
      {showNodeTooltip && (
        <NodeTooltip model={selectedNode as INodeTooltipModel} />
      )}
    </Card>
  );
};

export default Tooltips;
