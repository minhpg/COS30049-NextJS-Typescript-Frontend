"use client";

import { Card, Title, Text, ScatterChart } from "@tremor/react";
import { useQuery } from "@apollo/client";

import GetAllTransactions from "@/graphql/dashboard/GetAllTransactions.gql";

/** Plot `value` against `transaction_fee `*/
const ValueTransactionFeeScatterGraph = () => {
	const { data } = useQuery(GetAllTransactions);
	if (!data)
		return (
			<Card className="mt-6">
				<Text>Loading...</Text>
			</Card>
		);

	/** Converting Wei to ETH */
	const graphData = data.transactions.map(
		({ value, transaction_fee, hash }: any) => {
			return {
				value: value / 10 ** 18,
				transaction_fee: transaction_fee / 10 ** 18,
				hash,
			};
		}
	);

	return (
		<Card className="mt-6">
			<div className="md:flex justify-between">
				<div className="w-full">
					<Title>Value vs Transaction Fee</Title>
					<Text>Relationship between Value and Transaction Fee</Text>
				</div>
			</div>
			<ScatterChart
				className="h-96 mt-6"
				data={graphData}
				x="value"
				y="transaction_fee"
				category="hash"
				showLegend={false}
				showGridLines={true}
			/>
		</Card>
	);
};

export default ValueTransactionFeeScatterGraph;
