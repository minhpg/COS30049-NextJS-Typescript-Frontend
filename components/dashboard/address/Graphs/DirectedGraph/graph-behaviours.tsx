"use client";
import { INode, NodeConfig } from "@antv/g6";
import { GraphinContext, IG6GraphEvent } from "@antv/graphin";
import { useContext, useEffect } from "react";

import { reduceData } from "./utils";
import { truncateAddress } from "@/utils";

import { apolloClient } from "@/apollo/client-provider";
import GetTransactionEdgeAggregate from "@/graphql/dashboard/addresses/transactions/GetTransactionEdgeAggregate.gql";


export const NodeEvent = () => {
  const { graph } = useContext(GraphinContext);
  const handleClick = (evt: IG6GraphEvent) => {
    const node = evt.item as INode;
    const model = node.getModel() as NodeConfig;
    extendData(model.id);
  };

  const extendData = async (address: string) => {
    const { data } = await apolloClient.query({
      query: GetTransactionEdgeAggregate,
      variables: {
        address,
      },
    });
    let updated = 0;
    const { nodes, edges } = reduceData(data);
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

  const handleMouseEnter = (evt: IG6GraphEvent) => {
    const node = evt.item as INode;
    const model = node.getModel() as NodeConfig;
    graph.setItemState(node, "hover", true);
    graph.updateItem(node, {
      label: model.id,
    });
  };

  const handleMouseLeave = (evt: IG6GraphEvent) => {
    const node = evt.item as INode;
    const model = node.getModel() as NodeConfig;
    graph.setItemState(node, "hover", false);
    graph.updateItem(node, {
      label: truncateAddress(model.id),
    });
  };

  useEffect(() => {
    graph.on("node:click", handleClick);
    graph.on("node:mouseenter", handleMouseEnter);
    graph.on("node:mouseLeave", handleMouseLeave);
  }, [graph]);
  return null;
};
