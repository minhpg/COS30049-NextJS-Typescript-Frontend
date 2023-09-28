"use client";

import { Address, AddressTypeFull, NumberAggregate } from "@/types";
import { NodeConfig } from "@antv/g6";
import { useQuery } from "@apollo/client";
import GetFullAddressStat from "@/graphql/dashboard/addresses/stat/GetFullAddressStat.gql";
import { Card, Text } from "@tremor/react";
import { WeiToETH } from "@/utils";
import Link from "next/link";

export type INodeContextMenuModel = Partial<NodeConfig> & {
  data: Address;
};

export interface INodeContextMenuProps {
  model: INodeContextMenuModel;
}

interface TransactionsAggregate {
  count: number;
  node: {
    value: NumberAggregate;
  };
}

const NodeContextMenu = ({ model }: INodeContextMenuProps) => {
  const { data: modelData } = model;
  if (!modelData) return;
  const address = modelData.address;
  return (
    <Text className="text-xs">No actions!</Text>
  );
};

export default NodeContextMenu;
