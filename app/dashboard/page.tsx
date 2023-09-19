import ETHPriceCard from "@/components/dashboard/Cards/ETHPriceCard";
import TransactionVolumeCard from "@/components/dashboard/Cards/TransactionVolumeCard";
import TransactionsCountCard from "@/components/dashboard/Cards/TransactionsCountCard";
import TransactionsTable from "@/components/dashboard/Tables/TransactionsTable";
import {
  Card,
  Grid,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Title,
  Text,
} from "@tremor/react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import VolumeGraph from "@/components/dashboard/Graphs/VolumeGraph";
import { TransactionAggregate, Transaction, YearlyVolume } from "./types";
import { getDashboardData } from "./queries";
import { getClient } from "../apollo/server-provider";

const DashboardPage = async () => {
  const client = getClient()
  const {
    data: { transactionsAggregate, transactions, getYearlyVolume },
  }: {
    data: {
      transactionsAggregate: TransactionAggregate;
      transactions: Transaction[];
      getYearlyVolume: YearlyVolume[];
    };
  } = await client.query({
    query: getDashboardData
  });
  return (
    <>
      <Title>Dashboard</Title>
      <Text>Overview of ETH platform</Text>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Recent Transactions</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <ETHPriceCard />
              <TransactionsCountCard data={transactionsAggregate} />
              <TransactionVolumeCard data={transactionsAggregate} />
            </Grid>
            <div className="mt-6">
              <VolumeGraph data={getYearlyVolume} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <TransactionsTable transactions={transactions} />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};

export default DashboardPage;
