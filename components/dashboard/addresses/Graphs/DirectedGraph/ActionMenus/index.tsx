import EdgeActionMenu, { IEdgeActionMenuModel } from "./EdgeActionMenu";
import NodeActionMenu, { INodeActionMenuModel } from "./NodeActionMenu";
import { useContext } from "react";
import { GraphContext } from "../GraphContext";
import GraphActionMenu from "./GraphActionMenu";

const ActionMenus = () => {
	const context = useContext(GraphContext);
	const { showEdgeMenu, selectedEdge } = context.edgeMenu!;
	const { showNodeMenu, selectedNode } = context.nodeMenu!;
	return (
		<div>
			{showNodeMenu && (
				<NodeActionMenu
					model={selectedNode as INodeActionMenuModel}
					graph={context.graph}
				/>
			)}
			<GraphActionMenu graph={context.graph} />
			{showEdgeMenu && (
				<EdgeActionMenu model={selectedEdge as IEdgeActionMenuModel} />
			)}
		</div>
	);
};

export default ActionMenus;
