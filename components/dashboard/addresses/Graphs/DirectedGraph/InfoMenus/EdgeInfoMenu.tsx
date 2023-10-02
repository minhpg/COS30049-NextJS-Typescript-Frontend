import { TransactionEdgeAggregate } from "@/types";
import { WeiToETH } from "@/utils";
import { EdgeConfig } from "@antv/g6";
import { Card, Text } from "@tremor/react";
import Link from "next/link";

export type IEdgeInfoMenuModel = Partial<EdgeConfig> & {
	data: TransactionEdgeAggregate;
};

export interface IEdgeInfoMenuProps {
	model: IEdgeInfoMenuModel;
}
/** Display edge aggregation info */
const EdgeInfoMenu = ({ model }: IEdgeInfoMenuProps) => {
	const { data } = model;
	if (!data) return;
	return (
		<>
			<Text className="text-sm font-semibold">Transactions Summary</Text>
			<div className="mt-3">
				<Text className="font-light text-xs">From: </Text>
				<Link href={`/dashboard/addresses/${data.from_address.address}`}>
					<Text className="text-xs text-tremor-brand hover:underline">
						{data.from_address.address}
					</Text>
				</Link>
				<Text className="font-light text-xs">To: </Text>
				<Link href={`/dashboard/addresses/${data.to_address.address}`}>
					<Text className="text-xs text-tremor-brand hover:underline">
						{data.to_address.address}
					</Text>
				</Link>
			</div>
			<div className="mt-3">
				<Text className="text-xs">
					<span className="font-light">Count: </span>
					<span>{data.count}</span>
				</Text>
				<Text className="text-xs">
					<span className="font-light">Sum: </span>
					<span>{WeiToETH(data.value.sum)} ETH</span>
				</Text>
			</div>
		</>
	);
};

export default EdgeInfoMenu;
