"use client";

import G6, { EdgeConfig, IEdge, INode, NodeConfig } from "@antv/g6";
import { GraphinContext, IG6GraphEvent } from "@antv/graphin";
import React, { useContext, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { apolloClient } from "@/app/apollo/client-provider";
import { getGraphTransactions } from "@/app/dashboard/addresses/[address]/queries";
import { reduceData } from "./utils";
import EdgeTooltip from "./Tooltips/EdgeTooltip";
import NodeTooltip from "./Tooltips/NodeTooltip";

export const NodeEvent = () => {
  const { graph, apis } = useContext(GraphinContext);
  const handleClick = (evt: IG6GraphEvent) => {
    const node = evt.item as INode;
    const model = node.getModel() as NodeConfig;
    apis.focusNodeById(model.id);
    extendData(model.id);
  };

  const extendData = async (address: string) => {
    const { data } = await apolloClient.query({
      query: getGraphTransactions,
      variables: {
        address,
      },
    });
    let updated = 0;
    const { nodes, edges } = reduceData(data?.addresses[0]);
    for (const node of nodes) {
      if (!graph.findById(node.id)) {
        graph.addItem("node", node);
        updated += 1;
      }
    }
    for (const edge of edges) {
      if (!graph.findById(edge.id)) {
        graph.addItem("edge", edge);
        updated += 1;
      }
    }
    if (updated > 0) {
      graph.layout();
      graph.refresh();
    }
  };

  useEffect(() => {
    graph.on("node:click", handleClick);
    return () => {
      graph.off("node:click", handleClick);
    };
  }, []);
  return null;
};

export const EdgeEvent = () => {
  const { graph, apis } = useContext(GraphinContext);
  useEffect(() => {
    const handleClick = (evt: IG6GraphEvent) => {
      const edge = evt.item as IEdge;
      const model = edge.getModel() as EdgeConfig;
      console.log(model);
    };
    graph.on("edge:click", handleClick);
    return () => {
      graph.off("edge:click", handleClick);
    };
  }, []);
  return null;
};

export const nodeTooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 10,
  itemTypes: ["node"],
  trigger: "click",
  getContent: (event?: IG6GraphEvent) => {
    const node = event?.item as INode;
    const model = node.getModel() as NodeConfig;
    return ReactDOMServer.renderToStaticMarkup(<NodeTooltip model={model} />);
  },
});

export const edgeTooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 10,
  itemTypes: ["edge"],
  trigger: "click",
  getContent: (event?: IG6GraphEvent) => {
    const node = event?.item as INode;
    const model = node.getModel() as EdgeConfig;
    return ReactDOMServer.renderToStaticMarkup(<EdgeTooltip model={model} />);
  },
});
