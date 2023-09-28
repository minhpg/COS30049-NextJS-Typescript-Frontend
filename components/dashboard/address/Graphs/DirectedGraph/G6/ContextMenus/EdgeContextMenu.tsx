import { TransactionEdgeAggregate } from "@/types";
import { WeiToETH } from "@/utils";
import { EdgeConfig } from "@antv/g6";
import { Card, Text } from "@tremor/react";
import Link from "next/link";
import TransactionsTable from "./TransactionsTable";

export type IEdgeContextMenuModel = Partial<EdgeConfig> & {
  data: TransactionEdgeAggregate;
};

export interface IEdgeContextMenuProps {
  model: IEdgeContextMenuModel;
}

const EdgeContextMenu = ({ model }: IEdgeContextMenuProps) => {
  const { data } = model;
  if (!data) return;
  return (
    <TransactionsTable
      fromAddress={data.from_address.address}
      toAddress={data.to_address.address}
    />
  );
};

export default EdgeContextMenu;
