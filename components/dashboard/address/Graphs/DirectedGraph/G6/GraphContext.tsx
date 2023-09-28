import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import G6, {
  EdgeConfig,
  G6GraphEvent,
  Graph,
  GraphOptions,
  Grid,
  NodeConfig,
} from "@antv/g6";

import { useQuery } from "@apollo/client";
import GetTransactionEdgeAggregate from "@/graphql/dashboard/addresses/transactions/GetTransactionEdgeAggregate.gql";
import { reduceData } from "./utils";
import { registerEventShowPathOnHover } from "./register-events";
import "./Tooltips/tooltip.css";
import "./register-shapes";
import { TransactionEdgeAggregate } from "@/types";

interface GraphContextValue {
  address?: string;
  graph?: Graph;
  data?: {
    transactionEdgeAggregate: TransactionEdgeAggregate;
  };
  loading?: boolean;
  error?: any;
  edgeTooltip?: {
    showEdgeTooltip: boolean,
    setShowEdgeTooltip: React.Dispatch<React.SetStateAction<boolean>>,
    edgeTooltipX: number,
    setEdgeTooltipX: React.Dispatch<React.SetStateAction<number>>,
    edgeTooltipY: number,
    setEdgeTooltipY: React.Dispatch<React.SetStateAction<number>> ,
    selectedEdge: EdgeConfig
    setSelectedEdge: React.Dispatch<React.SetStateAction<EdgeConfig>>
  };
  nodeTooltip?: {
    showNodeTooltip: boolean,
    setShowNodeTooltip: React.Dispatch<React.SetStateAction<boolean>>,
    nodeTooltipX: number,
    setNodeTooltipX: React.Dispatch<React.SetStateAction<number>>,
    nodeTooltipY: number,
    setNodeTooltipY: React.Dispatch<React.SetStateAction<number>> ,
    selectedNode?: NodeConfig
    setSelectedNode: React.Dispatch<React.SetStateAction<NodeConfig>>
  };
  nodeContextMenu?: {
    showNodeContextMenu: boolean,
    setShowNodeContextMenu: React.Dispatch<React.SetStateAction<boolean>>,
    nodeContextMenuX: number,
    setNodeContextMenuX: React.Dispatch<React.SetStateAction<number>>,
    nodeContextMenuY: number,
    setNodeContextMenuY: React.Dispatch<React.SetStateAction<number>> ,
    selectedNode?: NodeConfig
    setSelectedNode: React.Dispatch<React.SetStateAction<NodeConfig>>
  };
  edgeContextMenu?: {
    showEdgeContextMenu: boolean,
    setShowEdgeContextMenu: React.Dispatch<React.SetStateAction<boolean>>,
    edgeContextMenuX: number,
    setEdgeContextMenuX: React.Dispatch<React.SetStateAction<number>>,
    edgeContextMenuY: number,
    setEdgeContextMenuY: React.Dispatch<React.SetStateAction<number>> ,
    selectedEdge?: EdgeConfig
    setSelectedEdge: React.Dispatch<React.SetStateAction<EdgeConfig>>
  };
}

const initContext: GraphContextValue = {};

export const GraphContext = createContext(initContext);

export const GraphContextProvider = ({ children, address }: { children: ReactNode, address: string }) => {
  let graph: any = null;

  // 边tooltip坐标
  const [showEdgeTooltip, setShowEdgeTooltip] = useState(false);
  const [edgeTooltipX, setEdgeTooltipX] = useState(0);
  const [edgeTooltipY, setEdgeTooltipY] = useState(0);
  const [selectedEdge, setSelectedEdge] = useState<Partial<EdgeConfig>>({});

  // 节点ContextMenu坐标
  const [showEdgeContextMenu, setShowEdgeContextMenu] = useState(false);
  const [edgeContextMenuX, setEdgeContextMenuX] = useState(0);
  const [edgeContextMenuY, setEdgeContextMenuY] = useState(0);

  // 节点tooltip坐标
  const [showNodeTooltip, setShowNodeTooltip] = useState(false);
  const [nodeTooltipX, setNodeTooltipX] = useState(0);
  const [nodeTooltipY, setNodeTooltipY] = useState(0);
  const [selectedNode, setSelectedNode] = useState<Partial<NodeConfig>>({});

  // 节点ContextMenu坐标
  const [showNodeContextMenu, setShowNodeContextMenu] = useState(false);
  const [nodeContextMenuX, setNodeContextMenuX] = useState(0);
  const [nodeContextMenuY, setNodeContextMenuY] = useState(0);

  const edgeTooltip = {
    showEdgeTooltip,
    setShowEdgeTooltip,
    edgeTooltipX,
    setEdgeTooltipX,
    edgeTooltipY,
    setEdgeTooltipY,
    selectedEdge,
    setSelectedEdge,
  };

  const edgeContextMenu = {
    showEdgeContextMenu,
    setShowEdgeContextMenu,
    edgeContextMenuX,
    setEdgeContextMenuX,
    edgeContextMenuY,
    setEdgeContextMenuY,
    selectedEdge,
    setSelectedEdge,
  };

  const nodeTooltip = {
    showNodeTooltip,
    setShowNodeTooltip,
    nodeTooltipX,
    setNodeTooltipX,
    nodeTooltipY,
    setNodeTooltipY,
    selectedNode,
    setSelectedNode,
  };

  const nodeContextMenu = {
    showNodeContextMenu,
    setShowNodeContextMenu,
    nodeContextMenuX,
    setNodeContextMenuX,
    nodeContextMenuY,
    setNodeContextMenuY,
    selectedNode,
    setSelectedNode,
  };

  const registerEventTooltipContextMenu = () => {
    // 监听edge上面mouse事件
    graph.on("edge:mouseenter", (evt: G6GraphEvent) => {
      const { item, target } = evt;
      const type = target.get("type");
      if (type !== "text") {
        return;
      }
      const model = item.getModel() as EdgeConfig;
      //   const { endPoint } = model;
      // y=endPoint.y - height / 2，在同一水平线上，x值=endPoint.x - width - 10
      //   const y = endPoint.y - 35;
      //   const x = endPoint.x - 150 - 10;
      const { x, y } = model;
      const point = graph.getCanvasByPoint(x, y);
      setEdgeTooltipX(point.x + 15);
      setEdgeTooltipY(point.y + 30);
      setShowEdgeTooltip(true);
      setSelectedEdge(model);
    });

    graph.on("edge:mouseleave", () => {
      setShowEdgeTooltip(false);
      setShowEdgeContextMenu(false);
    });

    graph.on("edge:contextmenu", (evt: G6GraphEvent) => {
      const { item } = evt;
      const model = item.getModel() as EdgeConfig;
      const { x, y } = model;
      const point = graph.getCanvasByPoint(x, y);
      setEdgeContextMenuX(point.x);
      setEdgeContextMenuY(point.y);
      setShowEdgeContextMenu(true);
      setSelectedEdge(model);
    });

    // 监听node上面mouse事件
    graph.on("node:mouseenter", (evt: G6GraphEvent) => {
      const { item } = evt;
      const model = item.getModel() as NodeConfig;
      const { x, y } = model;
      const point = graph.getCanvasByPoint(x, y);

      setNodeTooltipX(point.x + 15);
      setNodeTooltipY(point.y + 30);
      setShowNodeTooltip(true);
      setSelectedNode(model);
    });

    // 节点上面触发mouseleave事件后隐藏tooltip和ContextMenu
    graph.on("node:mouseleave", () => {
      setShowNodeTooltip(false);
      setShowNodeContextMenu(false);
    });

    // 监听节点上面右键菜单事件
    graph.on("node:contextmenu", (evt: G6GraphEvent) => {
      const { item } = evt;
      const model = item.getModel() as NodeConfig;
      const { x, y } = model;
      const point = graph.getCanvasByPoint(x, y);
      setNodeContextMenuX(point.x);
      setNodeContextMenuY(point.y);
      setShowNodeContextMenu(true);
      setSelectedNode(model);
    });
  };

  const { data, loading, error } = useQuery(GetTransactionEdgeAggregate, {
    variables: {
      address,
    },
  });

  useEffect(() => {
    if (!graph && data) {
      // const minimap = new G6.Minimap({
      //   size: [100, 100],
      //   className: "minimap",
      //   type: "delegate",
      // });

      const grid = new Grid();
      const graphOptions: GraphOptions = {
        container: "g6-graph",
        height: 500,
        renderer: "svg",
        modes: {
          default: ["drag-canvas", "drag-node", "zoom-canvas"],
        },
        defaultNode: {
          shape: "node-address",
          style: {
            stroke: "#ff68f0",
          },
        },
        defaultEdge: {
          style: {
            stroke: "#17acff",
            endArrow: true,
          },
          labelCfg: {
            autoRotate: true,
            refY: -8,
            style: {
              color: "rgb(107 114 128)",
              fontWeight: "light",
              fontSize: 10,
              opacity: 0.8,
            },
          },
        },
        layout: {
          type: "dagre",
          rankdir: "LR",
          nodesep: 30,
          ranksep: 100,
        },
        plugins: [grid],
      };
      graph = new G6.Graph(graphOptions);
      graph.data(reduceData(data));
      graph.render();
      registerEventShowPathOnHover(graph);
      registerEventTooltipContextMenu();
    }
  }, [data]);

  const value = {
    address,
    graph,
    data,
    loading,
    error,
    nodeTooltip,
    edgeTooltip,
    nodeContextMenu,
    edgeContextMenu,
  };

  return (
    <GraphContext.Provider value={value}>{children}</GraphContext.Provider>
  );
};
