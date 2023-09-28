"use client";

import { TransactionEdgeAggregate } from "@/types";
import { WeiToETH, removeDuplicates, truncateAddress } from "@/utils";

import { IUserEdge, Utils } from "@antv/graphin";

export const reduceData = (data: {
  transactionEdgeAggregate: TransactionEdgeAggregate[];
}) => {
  const transactionEdges = data.transactionEdgeAggregate;
  console.log(transactionEdges);
  const addresses = removeDuplicates([
    ...transactionEdges.map(({ from_address: { address } }) => {
      return address;
    }),
    ...transactionEdges.map(({ to_address: { address } }) => {
      return address;
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
    to_address: { address: to_address },
    from_address: { address: from_address },
    count,
    value: { sum },
  }: TransactionEdgeAggregate): IUserEdge => {
    return {
      source: from_address,
      target: to_address,
      id: `${from_address}-${to_address}`,
      style: {
        label: {
          value: `Count: ${count} - Total: ${WeiToETH(sum)} ETH`,
        },
      },
    };
  };

  const edges = transactionEdges.map(mapTransactionToEdge);

  return {
    nodes,
    edges: Utils.processEdges(edges, {
      poly: 50,
      loop: 10,
    }),
  };
};

// export const reduceDataFromTransactions = (address: any) => {
//   console.log(address);

//   const { bought, sold, address: source_address } = address;

//   const addresses = removeDuplicates([
//     source_address,
//     ...bought.map((transaction: any) => {
//       return transaction.from_address.address;
//     }),
//     ...sold.map((transaction: any) => {
//       return transaction.to_address.address;
//     }),
//   ]);

//   const nodes = addresses.map((address) => {
//     return {
//       id: address,
//       label: address,
//       type: "graphin-circle",
//       style: {
//         label: {
//           value: truncateAddress(address),
//         },
//       },
//     };
//   });

//   const mapTransactionToEdge = ({
//     block_timestamp,
//     hash,
//     value,
//     to_address,
//     from_address,
//   }: any) => {
//     return {
//       source: from_address.address,
//       target: to_address.address,
//       id: hash,
//       data: {
//         block_timestamp,
//         hash,
//         value,
//         to_address,
//         from_address,
//       },
//       style: {
//         label: {
//           value: truncateAddress(hash),
//         },
//         //         animate: {
//         //   type: 'circle-running',
//         //   color: 'black',
//         //   repeat: true,
//         //   duration: 4000,
//         // },
//       },
//     };
//   };

//   let edges = [
//     ...sold.map(mapTransactionToEdge),
//     ...bought.map(mapTransactionToEdge),
//   ];

//   edges = Utils.processEdges(edges, {
//     poly: 50,
//     loop: 10,
//   });

//   console.log(nodes, edges);

//   return {
//     nodes,
//     edges,
//   };
// };
