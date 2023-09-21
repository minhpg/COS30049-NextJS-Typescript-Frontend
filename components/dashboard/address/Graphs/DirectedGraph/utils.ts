"use client" 

import { removeDuplicates, truncateAddress } from "@/utils";

import { Utils } from "@antv/graphin";

export const reduceData = (address: any) => {

  console.log(address)

  const { bought, sold, address: source_address } = address;

  const addresses = removeDuplicates([
    source_address,
    ...bought.map((transaction: any) => {
      return transaction.from_address.address;
    }),
    ...sold.map((transaction: any) => {
      return transaction.to_address.address;
    }),
  ]);

  const nodes = addresses.map((address) => {
    return {
      id: address,
      label: address,
      type: "graphin-circle",
      style: {
        label: {
          value: truncateAddress(address),
        },
      },
    };
  });

  const mapTransactionToEdge = ({
    block_timestamp,
    hash,
    value,
    to_address,
    from_address,
  }: any) => {
    return {
      source: from_address.address,
      target: to_address.address,
      id: hash,
      data: {
        block_timestamp,
        hash,
        value,
        to_address,
        from_address,
      },
      style: {
        label: {
          value: truncateAddress(hash)
        },
      //         animate: {
      //   type: 'circle-running',
      //   color: 'black',
      //   repeat: true,
      //   duration: 4000,
      // },
      },
    };
  };

  let edges = [
    ...sold.map(mapTransactionToEdge),
    ...bought.map(mapTransactionToEdge),
  ];

  edges = Utils.processEdges(edges, {
    poly: 50,
    loop: 10,
  });

  console.log(nodes, edges)

  return {
    nodes,
    edges,
  };
};
