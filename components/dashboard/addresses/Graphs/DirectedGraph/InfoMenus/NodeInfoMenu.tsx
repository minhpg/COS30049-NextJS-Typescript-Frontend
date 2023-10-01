"use client";

import { Address, AddressTypeFull, NumberAggregate } from "@/types";
import { NodeConfig } from "@antv/g6";
import { Flex, Text } from "@tremor/react";
import { WeiToETH } from "@/utils";
import Link from "next/link";

export type INodeInfoMenuModel = Partial<NodeConfig> & {
	data: Address;
};

export interface INodeInfoMenuProps {
	data: {
		address: string;
		type: string;
		boughtAggregate: TransactionsAggregate;
		soldAggregate: TransactionsAggregate;
	};
}

interface TransactionsAggregate {
	count: number;
	node: {
		value: NumberAggregate;
	};
}

const NodeInfoMenu = ({ data }: INodeInfoMenuProps) => {
	const {
		address,
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
	} = data;

	return (
		<>
			<Text className="text-sm font-semibold">
				{address}{" "}
				<Link href={`/dashboard/addresses/${address}`}>
					<span className="text-xs font-normal text-tremor-brand hover:underline">
						View details
					</span>
				</Link>
			</Text>

			<Text className="text-xs mt-3">
				<span className="font-light">Type:</span>{" "}
				<span>
					{AddressTypeFull[type as keyof typeof AddressTypeFull]}
				</span>
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

export default NodeInfoMenu;
