"use client";

import { TransactionEdgeAggregate } from "@/types";
import { WeiToETH, removeDuplicatedObjects, truncateAddress } from "@/utils";

import G6 from "@antv/g6";
import { IUserEdge, IUserNode } from "@antv/graphin";
import { Address } from "cluster";

interface IReduceData {
  nodes: IUserNode[];
  edges: IUserEdge[];
}

export const reduceData = (data: {
  transactionEdgeAggregate: TransactionEdgeAggregate[];
}): IReduceData => {
  const transactionEdges = data.transactionEdgeAggregate;
  const addresses = removeDuplicatedObjects([
    ...transactionEdges.map(({ from_address }) => {
      return from_address;
    }),
    ...transactionEdges.map(({ to_address }) => {
      return to_address;
    }),
  ], "address");

  const mapTransactionToEdge = (data: TransactionEdgeAggregate): IUserEdge  => {
    const {
      to_address: { address: to_address },
      from_address: { address: from_address },
      count,
      value: { sum },
    } = data;
    return {
      source: from_address,
      target: to_address,
      id: `${from_address}-${to_address}`,
      data,
    //   type: "line-transaction",
      label: `Count: ${count} - Total: ${WeiToETH(sum)} ETH`,
      // shape: from_address == to_address ? "loop" : "line"
      style: {
        
      }
    };
  };

  const offsetDiff = 10;
  const multiEdgeType = "arc";
  const singleEdgeType = "line";
  const loopEdgeType = "loop";

  return {
    nodes: addresses.map((address: Address) => {
      return {
        id: address.address,
        label: truncateAddress(address.address),
        data: address,
        type: "node-address"
      };
    }),
    edges: G6.Util.processParallelEdges(
      transactionEdges.map(mapTransactionToEdge),
      offsetDiff,
      multiEdgeType,
      singleEdgeType,
      loopEdgeType
    ),
    // edges: transactionEdges.map(mapTransactionToEdge)
  };
};
