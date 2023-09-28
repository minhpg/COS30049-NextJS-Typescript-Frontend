"use client";

import { Address, AddressTypeFull, NumberAggregate } from "@/types";
import { NodeConfig } from "@antv/g6";
import { useQuery } from "@apollo/client";
import GetFullAddressStat from "@/graphql/dashboard/addresses/stat/GetFullAddressStat.gql";
import { Card, Text } from "@tremor/react";
import { WeiToETH } from "@/utils";
import Link from "next/link";

export type INodeTooltipModel = Partial<NodeConfig> & {
  data: Address;
};

export interface INodeTooltipProps {
  model: INodeTooltipModel;
}

interface TransactionsAggregate {
  count: number;
  node: {
    value: NumberAggregate;
  };
}

const NodeTooltip = ({ model }: INodeTooltipProps) => {
  const { data: modelData } = model;
  if (!modelData) return;
  const address = modelData.address;
  const { data } = useQuery(GetFullAddressStat, {
    variables: {
      address,
    },
  });

  if (!data) return <Text className="text-sm">Loading...</Text>;

  const {
    type,
    boughtAggregate: {
      count: boughtCount,
      node: {
        value: { sum: boughtSum },
      },
    },
    soldAggregate: {
      count: soldCount,
      node: {
        value: { sum: soldSum },
      },
    },
  }: {
    type: string;
    boughtAggregate: TransactionsAggregate;
    soldAggregate: TransactionsAggregate;
  } = data.addresses[0];

  return (
    <>
      <Link href={`/dashboard/addresses/${address}`}>
        <Text className="text-tremor-brand text-sm hover:underline">{address}</Text>
      </Link>
      <Text className="text-xs mt-3">
        <span className="font-light">Type:</span>{" "}
        <span>{AddressTypeFull[type as keyof typeof AddressTypeFull]}</span>
      </Text>
      <div className="mt-3">
        <Text className="text-xs">Bought</Text>
        <Text className="text-xs">
          <span className="font-light">Count: </span>
          <span>{boughtCount}</span>
        </Text>
        <Text className="text-xs">
          <span className="font-light">Sum: </span>
          <span>{WeiToETH(boughtSum)} ETH</span>
        </Text>
      </div>
      <div className="mt-3">
        <Text className="text-xs">Sold</Text>
        <Text className="text-xs">
          <span className="font-light">Count: </span>
          <span>{soldCount}</span>
        </Text>
        <Text className="text-xs">
          <span className="font-light">Sum: </span>
          <span>{WeiToETH(soldSum)} ETH</span>
        </Text>
      </div>
    </>
  );
};

export default NodeTooltip;
