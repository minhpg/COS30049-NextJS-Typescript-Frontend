import type { Metadata } from "next";
import { Title, Text } from "@tremor/react";

import InformationBody from "@/components/dashboard/transactions/InformationBody";

import { getClient } from "@/apollo/server-provider";
import { Transaction } from "@/types";

import GetTransactionDetails from "@/graphql/dashboard/transactions/GetTransactionDetails.gql";

export const metadata: Metadata = {
	title: "Transactions",
	description: "Transactions",
};

/** Transaction detail page */
const TransactionPage = async ({
	params: { transaction },
}: {
	params: { transaction: string };
}) => {
	const client = getClient();
	const { data } = await client.query({
		query: GetTransactionDetails,
		variables: {
			hash: transaction,
		},
	});

	if (!data) return <Text>Data Fetching Error!</Text>;

	const { transactions } = data;

	if (!(transactions.length > 0)) {
		return (
			<>
				<Title>{transaction}</Title>
				<Text>Transaction not found!</Text>
			</>
		);
	}

	const current_transaction: Transaction = transactions[0];

	return (
		<>
			<Title>Transaction Details</Title>
			<InformationBody transaction={current_transaction} />
		</>
	);
};

export default TransactionPage;
