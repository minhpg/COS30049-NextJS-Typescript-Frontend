import { EdgeConfig, Graph, NodeConfig } from "@antv/g6";
import DefaultContextMenu from "./DefaultContextMenu";
import { Card } from "@tremor/react";
import EdgeContextMenu, { IEdgeContextMenuModel } from "./EdgeContextMenu";
import NodeContextMenu, { INodeContextMenuModel } from "./NodeContextMenu";

interface IContextMenusProps {
  graph?: Graph;
  showEdgeContextMenu: boolean;
  showNodeContextMenu: boolean;
  selectedEdge: EdgeConfig;
  selectedNode: NodeConfig;
}
const ContextMenus = ({
  graph,
  showEdgeContextMenu,
  showNodeContextMenu,
  selectedEdge,
  selectedNode,
}: IContextMenusProps) => {
  return (
    <Card
      className="z-20 w-80 break-all p-5 absolute overflow-y-scroll max-h-56"
      style={{ bottom: 15, left: 15 }}
    >
      {showEdgeContextMenu || showNodeContextMenu ? (
        <></>
      ) : (
        <DefaultContextMenu graph={graph} />
      )}
      {showEdgeContextMenu && (
        <EdgeContextMenu model={selectedEdge as IEdgeContextMenuModel} />
      )}
      {showNodeContextMenu && (
        <NodeContextMenu model={selectedNode as INodeContextMenuModel} />
      )}
    </Card>
  );
};

export default ContextMenus;