import React, { ReactNode, createContext, useEffect, useState } from "react";
import G6, { EdgeConfig, G6GraphEvent, Graph, NodeConfig } from "@antv/g6";

import { useQuery } from "@apollo/client";
import GetTransactionEdgeAggregate from "@/graphql/dashboard/addresses/transactions/GetTransactionEdgeAggregate.gql";
import { reduceData } from "./utils";
import { registerEventShowPathOnHover } from "./register-events";
import "./Tooltips/tooltip.css";
import "./register-shapes";
import { TransactionEdgeAggregate } from "@/types";
import { graphOptions } from "./graph-options";

interface GraphContextValue {
  address?: string;
  graph?: Graph;
  data?: {
    transactionEdgeAggregate: TransactionEdgeAggregate;
  };
  loading?: boolean;
  error?: any;
  edgeTooltip?: {
    showEdgeTooltip: boolean;
    setShowEdgeTooltip: React.Dispatch<React.SetStateAction<boolean>>;
    selectedEdge: EdgeConfig;
    setSelectedEdge: React.Dispatch<React.SetStateAction<EdgeConfig>>;
  };
  nodeTooltip?: {
    showNodeTooltip: boolean;
    setShowNodeTooltip: React.Dispatch<React.SetStateAction<boolean>>;
    selectedNode?: NodeConfig;
    setSelectedNode: React.Dispatch<React.SetStateAction<NodeConfig>>;
  };
  nodeContextMenu?: {
    showNodeContextMenu: boolean;
    setShowNodeContextMenu: React.Dispatch<React.SetStateAction<boolean>>;
    selectedNode?: NodeConfig;
    setSelectedNode: React.Dispatch<React.SetStateAction<NodeConfig>>;
  };
  edgeContextMenu?: {
    showEdgeContextMenu: boolean;
    setShowEdgeContextMenu: React.Dispatch<React.SetStateAction<boolean>>;
    selectedEdge?: EdgeConfig;
    setSelectedEdge: React.Dispatch<React.SetStateAction<EdgeConfig>>;
  };
}

const initContext: GraphContextValue = {};

export const GraphContext = createContext(initContext);

export const GraphContextProvider = ({
  children,
  address,
}: {
  children: ReactNode;
  address: string;
}) => {
  const [graph, setGraph] = useState<Graph>();

  // 边tooltip坐标
  const [showEdgeTooltip, setShowEdgeTooltip] = useState(false);
  const [selectedEdge, setSelectedEdge] = useState<Partial<EdgeConfig>>({});

  // 节点ContextMenu坐标
  const [showEdgeContextMenu, setShowEdgeContextMenu] = useState(false);

  // 节点tooltip坐标
  const [showNodeTooltip, setShowNodeTooltip] = useState(false);
  const [selectedNode, setSelectedNode] = useState<Partial<NodeConfig>>({});

  // 节点ContextMenu坐标
  const [showNodeContextMenu, setShowNodeContextMenu] = useState(false);

  const edgeTooltip = {
    showEdgeTooltip,
    setShowEdgeTooltip,
    selectedEdge,
    setSelectedEdge,
  };

  const edgeContextMenu = {
    showEdgeContextMenu,
    setShowEdgeContextMenu,
    selectedEdge,
    setSelectedEdge,
  };

  const nodeTooltip = {
    showNodeTooltip,
    setShowNodeTooltip,
    selectedNode,
    setSelectedNode,
  };

  const nodeContextMenu = {
    showNodeContextMenu,
    setShowNodeContextMenu,
    selectedNode,
    setSelectedNode,
  };

  const registerEventTooltipContextMenu = (graph: Graph) => {
    // 监听edge上面mouse事件
    graph.on("edge:click", (evt: G6GraphEvent) => {
      const { item, target } = evt;
      const type = target.get("type");
      if (type !== "text") {
        return;
      }
      const model = item.getModel() as EdgeConfig;
      setShowEdgeTooltip(true);
      setShowEdgeContextMenu(true);
      setShowNodeTooltip(false);
      setShowNodeContextMenu(false);
      setSelectedEdge(model);
    });

    // 监听node上面mouse事件
    graph.on("node:click", (evt: G6GraphEvent) => {
      const { item } = evt;
      const model = item.getModel() as NodeConfig;
      setShowEdgeTooltip(false);
      setShowEdgeContextMenu(false);
      setShowNodeTooltip(true);
      setShowNodeContextMenu(true);
      setSelectedNode(model);
    });


    graph.on("canvas:click", (evt: G6GraphEvent) => {
      setShowNodeTooltip(false);
      setShowNodeContextMenu(false);
      setShowEdgeTooltip(false);
      setShowEdgeContextMenu(false);
    });
  };

  const { data, loading, error } = useQuery(GetTransactionEdgeAggregate, {
    variables: {
      address,
    },
  });

  useEffect(() => {
    if (!graph && data) {
      setGraph(new G6.Graph(graphOptions));
    }
  }, [data]);

  useEffect(() => {
    if (graph) {
      graph.data(reduceData(data));
      graph.render();
      registerEventShowPathOnHover(graph);
      registerEventTooltipContextMenu(graph);
    }
  }, [graph]);

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
