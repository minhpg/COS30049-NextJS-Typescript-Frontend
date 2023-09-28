"use client";
import { LayoutConfig } from "@antv/g6";
import { Card, Text } from "@tremor/react";
import { GraphContext, GraphContextProvider } from "./GraphContext";
import { useContext } from "react";
import Tooltips from "./Tooltips";
import ContextMenus from "./ContextMenus";

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
    graph,
  } = useContext(GraphContext);
  const { showEdgeTooltip, selectedEdge } = edgeTooltip;
  const { showNodeTooltip, selectedNode } = nodeTooltip;
  const { showEdgeContextMenu } = edgeContextMenu;
  const { showNodeContextMenu } = nodeContextMenu;
  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Card className="rounded-none p-0 mt-6">
      <div id="g6-graph" className="h-full w-full">
        <Tooltips
          graph={graph}
          showEdgeTooltip={showEdgeTooltip}
          showNodeTooltip={showNodeTooltip}
          selectedEdge={selectedEdge}
          selectedNode={selectedNode}
        />
        <ContextMenus
          graph={graph}
          showEdgeContextMenu={showEdgeContextMenu}
          showNodeContextMenu={showNodeContextMenu}
          selectedEdge={selectedEdge}
          selectedNode={selectedNode}
        />
      </div>
    </Card>
  );
};

export default G6Graph;
