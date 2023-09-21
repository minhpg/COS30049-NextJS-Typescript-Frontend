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
import { Address, AddressStatResponse, addressType } from "./types";
import SoldVolumeCard from "@/components/dashboard/address/Cards/SoldVolumeCard";
import BoughtVolumeCard from "@/components/dashboard/address/Cards/BoughtVolumeCard";
import LatestTransactionsCard from "@/components/dashboard/address/Cards/LatestTransactionsCard";
import DirectedGraph from "@/components/dashboard/address/Graphs/DirectedGraph";
import { getAddressStat } from "./queries";
import { getClient } from "@/app/apollo/server-provider";
import {
  getSellTransactions,
  getBuyTransactions,
} from "@/app/dashboard/addresses/[address]/queries";
import TransactionsTable from "@/components/dashboard/Tables/TransactionsTable";

const AddressPage = async ({
  params: { address },
}: {
  params: { address: string };
}) => {
  const client = getClient();
  const {
    data: { addresses },
  }: AddressStatResponse = await client.query({
    query: getAddressStat,
    variables: {
      address,
    },
  });

  if (!(addresses.length > 0)) {
    return (
      <>
        <Title>{address}</Title>
        <Text>Address not found!</Text>
      </>
    );
  }

  const { type }: Address = addresses[0];

  return (
    <>
      <Title>{address}</Title>
      <Text>
        <span className="font-light">Type of address:</span> {addressType[type]}
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
              {/* <LatestTransactionsCard
                address={address}
              /> */}
            </Grid>
            <div className="mt-6">
              <DirectedGraph address={address} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <TransactionsTable
                address={address}
                query={getSellTransactions}
                title="Sell History"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <TransactionsTable
                address={address}
                query={getBuyTransactions}
                title="Buy History"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};

export default AddressPage;
