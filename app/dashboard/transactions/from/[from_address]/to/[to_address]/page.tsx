import type { Metadata } from "next";
import {
	Tab,
	TabList,
	TabGroup,
	TabPanel,
	TabPanels,
	Title,
	Text,
} from "@tremor/react";

import TransactionsTable from "@/components/dashboard/Tables/TransactionsTable";

import GetTransactionsBetween from "@/graphql/dashboard/transactions/GetTransactionsBetween.gql";

export const metadata: Metadata = {
	title: "Transactions",
	description: "Transactions",
};

/** Display transactions between two addresses */
const TransactionsBetween = async ({
	params: { from_address, to_address },
}: {
	params: { from_address: string; to_address: string };
}) => {
	return (
		<>
			<Title>Transactions</Title>
			<Text>
				Between {from_address} & {to_address}
			</Text>
			<TabGroup className="mt-6">
				<TabList>
					<Tab>Sold</Tab>
					<Tab>Bought</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<TransactionsTable
							fromAddress={from_address}
							toAddress={to_address}
							query={GetTransactionsBetween}
							title="Sell History"
						/>
					</TabPanel>
					<TabPanel>
						<TransactionsTable
							fromAddress={to_address}
							toAddress={from_address}
							query={GetTransactionsBetween}
							title="Buy History"
						/>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</>
	);
};

export default TransactionsBetween;
