import { TransactionEdgeAggregate } from "@/types";
import { WeiToETH } from "@/utils";
import { EdgeConfig } from "@antv/g6";
import { Card, Text } from "@tremor/react";
import Link from "next/link";
import TransactionsTable from "./TransactionsTable";

export type IEdgeActionMenuModel = Partial<EdgeConfig> & {
	data: TransactionEdgeAggregate;
};

export interface IEdgeActionMenuProps {
	model: IEdgeActionMenuModel;
}

/** Edge actions - display transactions */
const EdgeActionMenu = ({ model }: IEdgeActionMenuProps) => {
	const { data } = model;
	if (!data) return;
	return (
		<div className="mt-3 flex-1">
			<Text className="text-xs">Transactions</Text>
			<div className="h-56  overflow-y-scroll mt-3 -mx-5 px-5">
				<TransactionsTable
					fromAddress={data.from_address.address}
					toAddress={data.to_address.address}
				/>
			</div>
		</div>
	);
};

export default EdgeActionMenu;
