"use client";
import { LayoutConfig } from "@antv/g6";
import { Card, Text } from "@tremor/react";
import { GraphContext, GraphContextProvider } from "./GraphContext";
import { useContext } from "react";
import EdgeTooltip from "./Tooltips/EdgeTooltip";
import NodeTooltip from "./Tooltips/NodeTooltip";

const G6Graph = ({
  address,
  layout,
}: {
  address: string;
  layout?: LayoutConfig;
}) => {
  return (
    <GraphContextProvider address={address}>
      <GraphInternal />
    </GraphContextProvider>
  );
};

const GraphInternal = () => {
  const {
    loading,
    error,
    edgeTooltip,
    nodeTooltip,
    edgeContextMenu,
    nodeContextMenu,
  } = useContext(GraphContext);
  const { showEdgeTooltip, edgeTooltipX, edgeTooltipY, selectedEdge } = edgeTooltip;
  const { showNodeTooltip, nodeTooltipX, nodeTooltipY, selectedNode } = nodeTooltip;
  // const { showEdgeContextMenu } = edgeContextMenu;
  // const { showNodeContextMenu } = nodeContextMenu;
  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Card className="rounded-none p-0 mt-6">
      <div id="g6-graph" className="h-full w-full">
        {showEdgeTooltip && <EdgeTooltip x={edgeTooltipX} y={edgeTooltipY} model={selectedEdge}/>}
        {showNodeTooltip && <NodeTooltip x={nodeTooltipX} y={nodeTooltipY} model={selectedNode}/>}
      </div>
    </Card>
  );
};

export default G6Graph;
