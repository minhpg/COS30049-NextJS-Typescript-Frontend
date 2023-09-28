import G6, { IEdge, IG6GraphEvent, INode, NodeConfig } from "@antv/g6";
import { renderToString } from "react-dom/server";
import NodeTooltip from "./Tooltips/NodeTooltip";
import EdgeTooltip, { IEdgeTooltipModel } from "./Tooltips/EdgeTooltip";

export const registerNodeTooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 20,
  getContent(event: IG6GraphEvent | undefined) {
    if (!event) return "";
    const node = event.item as INode;
    const model = node.getModel() as NodeConfig;
    return renderToString(<NodeTooltip model={model} />);
  },
  itemTypes: ["node"],
});

export const registerEdgeTooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 20,
  getContent(event: IG6GraphEvent | undefined) {
    if (!event) return "";
    const edge = event.item as IEdge;
    const model = edge.getModel() as IEdgeTooltipModel;
    return renderToString(<EdgeTooltip model={model} />);
  },
  itemTypes: ["edge"],
});
