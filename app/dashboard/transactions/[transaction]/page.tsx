import type { Metadata } from "next";
import { Title, Text } from "@tremor/react";

import InformationBody from "@/components/dashboard/transactions/InformationBody";

import { getClient } from "@/apollo/server-provider";
import { Transaction } from "@/types";

import GetTransactionDetails from "@/graphql/dashboard/transactions/GetTransactionDetails.gql";
import { alchemyClient } from "@/alchemy";

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

	let current_transaction: Transaction;
	let fallback = false;

	if (!data) return <Text>Data Fetch Error!</Text>

	const { transactions } = data;

	if ((transactions.length > 0)) current_transaction = transactions[0];
	
	else {
		fallback = true;
		const { hash, blockHash, blockNumber, to, from, data, value, gasPrice, transactionIndex } = await alchemyClient.transact.getTransaction(transaction)
		current_transaction = {
			from_address: {
				address: from.toLowerCase()
			},
			to_address: {
				address: to.toLowerCase()
			},
			transaction_index: transactionIndex,
			hash,
			block_hash: blockHash,
			block_number: blockNumber,
			input: data,
			value: parseFloat(value),
			gas_price: parseFloat(gasPrice),
			gas_used: null,
			gas: null,
			block_timestamp: null,
			transaction_fee: null,
		}
	}

	if(!current_transaction)
	return (
		<>
			<Title>{transaction}</Title>
			<Text>Transaction not found!</Text>
		</>
	);

	return (
		<>
			<Title>Transaction Details</Title>
			{ fallback && <Text> Fallback: Alchemy</Text>}
			<InformationBody transaction={current_transaction} />
		</>
	);
};

export default TransactionPage;
