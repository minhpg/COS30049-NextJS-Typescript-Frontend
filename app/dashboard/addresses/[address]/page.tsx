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
} from "@tremor/react";

import SoldVolumeCard from "@/components/dashboard/addresses/Cards/SoldVolumeCard";
import BoughtVolumeCard from "@/components/dashboard/addresses/Cards/BoughtVolumeCard";
import LatestTransactionsCard from "@/components/dashboard/addresses/Cards/LatestTransactionsCard";

import TransactionsTable from "@/components/dashboard/Tables/TransactionsTable";

import DirectedGraph from "@/components/dashboard/addresses/Graphs/DirectedGraph";

import { getClient } from "@/apollo/server-provider";
import { AddressTypeFull, Addresses } from "@/types";

import GetAddress from "@/graphql/dashboard/addresses/stat/GetAddress.gql";
import GetSellTransactions from "@/graphql/dashboard/addresses/transactions/GetSellTransactions.gql";
import GetBuyTransactions from "@/graphql/dashboard/addresses/transactions/GetBuyTransactions.gql";

export const metadata: Metadata = {
	title: "Addresses",
	description: "Addresses",
};

/** Address detail page */
const AddressPage = async ({
	params: { address },
}: {
	params: { address: string };
}) => {
	const client = getClient();
	const {
		data,
	}: {
		data: {
			addresses: Addresses;
		};
	} = await client.query({
		query: GetAddress,
		variables: {
			address,
		},
	});

	if (!data) return <Text>Data Fetching Error!</Text>;

	const { addresses } = data;

	if (!(addresses.length > 0)) {
		return (
			<>
				<Title>{address}</Title>
				<Text>Address not found!</Text>
			</>
		);
	}

	const { type } = addresses[0];

	return (
		<>
			<Title>{address}</Title>
			<Text>
				<span className="font-light">Type of address:</span>{" "}
				{AddressTypeFull[type as keyof typeof AddressTypeFull]}
			</Text>
			<TabGroup className="mt-6">
				<TabList>
					<Tab>Overview</Tab>
					<Tab>Sold</Tab>
					<Tab>Bought</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
							<BoughtVolumeCard address={address} />
							<SoldVolumeCard address={address} />
							<LatestTransactionsCard address={address} />
						</Grid>
						<DirectedGraph address={address} />
					</TabPanel>
					<TabPanel>
						<TransactionsTable
							address={address}
							query={GetSellTransactions}
							title="Sell History"
						/>
					</TabPanel>
					<TabPanel>
						<TransactionsTable
							address={address}
							query={GetBuyTransactions}
							title="Buy History"
						/>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</>
	);
};

export default AddressPage;
