import type { Metadata } from "next";
import {
	Grid,
	Tab,
	TabList,
	TabGroup,
	TabPanel,
	TabPanels,
	Title,
	Text,
	Callout,
} from "@tremor/react";

import ETHPriceCard from "@/components/dashboard/Cards/ETHPriceCard";
import TransactionVolumeCard from "@/components/dashboard/Cards/TransactionVolumeCard";
import TransactionsCountCard from "@/components/dashboard/Cards/TransactionsCountCard";

import TransactionsTable from "@/components/dashboard/Tables/TransactionsTable";

import VolumeGraph from "@/components/dashboard/Graphs/VolumeGraph";
import NormalDistributionGraph from "@/components/dashboard/Graphs/NormalDistributionGraph";
import TopAddressesGraph from "@/components/dashboard/Graphs/TopAddressesGraph";
import ValueTransactionFeeScatterGraph from "@/components/dashboard/Graphs/ValueTransactionFeeScatterGraph";

import { getClient } from "@/apollo/server-provider";
import { NumberAggregate } from "@/types";

import GetDashboardData from "@/graphql/dashboard/GetDashboardData.gql";
import GetAllTransactions from "@/graphql/dashboard/GetAllTransactions.gql";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Dashboard",
};

/** Dashboard page */
const Dashboard = async () => {
	const client = getClient();
	const {
		data,
	}: {
		data: {
			transactionsAggregate: {
				count: number;
				block_timestamp: {
					min: string;
					max: string;
				};
				gas: NumberAggregate;
				value: NumberAggregate;
			};
		};
	} = await client.query({
		query: GetDashboardData,
	});

	if (!data) return <Text>Data Fetching Error!</Text>;

	const { transactionsAggregate } = data;
	return (
		<>
			<Title>Dashboard</Title>
			<Text>Overview of ETH platform</Text>
			<Callout className="mt-4" title="Directed Graph" >
				Visit an address to view directed graph e.g.{" "}
				<Link
					href="/dashboard/addresses/0xb0606f433496bf66338b8ad6b6d51fc4d84a44cd"
					className="font-bold hover:underline"
				>
					0xb0606f433496bf66338b8ad6b6d51fc4d84a44cd
				</Link>
			</Callout>
			<TabGroup className="mt-6">
				<TabList>
					<Tab>Overview</Tab>
					<Tab>Visualizing</Tab>
					<Tab>Recent Transactions</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
							<ETHPriceCard />
							<TransactionsCountCard data={transactionsAggregate} />
							<TransactionVolumeCard data={transactionsAggregate} />
						</Grid>
						<VolumeGraph />
					</TabPanel>
					<TabPanel>
						<NormalDistributionGraph />
						<TopAddressesGraph />
						<ValueTransactionFeeScatterGraph />
					</TabPanel>
					<TabPanel>
						<TransactionsTable
							address={""}
							query={GetAllTransactions}
							title={"Transactions"}
						/>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</>
	);
};

export default Dashboard;
