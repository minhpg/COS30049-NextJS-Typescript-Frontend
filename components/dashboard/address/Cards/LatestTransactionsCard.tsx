import { Card, Flex, Metric, Text, Grid } from "@tremor/react";
import Link from "next/link";

import { getClient } from "@/apollo/server-provider";
import GetLatestTransactions from "@/graphql/dashboard/addresses/stat/GetLatestTransactions.gql";
import { dateTimetoDate, truncateAddress } from "@/utils";

const LatestTransactionsCard = async ({ address }: { address: string }) => {
  const client = getClient();
  const { data, loading, error } = await client.query({
    query: GetLatestTransactions,
    variables: {
      address,
    },
    errorPolicy: "ignore",
  });

  const current_address = data.addresses[0];

  const { bought, sold, boughtAggregate, soldAggregate } = current_address;
  return (
    <Card className="mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Total Transactions</Text>
          <Metric>{boughtAggregate.count + soldAggregate.count}</Metric>
        </div>
      </Flex>

      <Grid className="mt-4">
        {bought.length > 0 ? (
          <>
            <Text className="font-light">Bought</Text>
            <Text>
              <Link
                className="hover:underline text-tremor-brand"
                href={`/dashboard/transactions/${bought[0].hash}`}
              >
                {truncateAddress(bought[0].hash)}
              </Link>{" "}
              on {dateTimetoDate(bought[0].block_timestamp)}
            </Text>
          </>
        ) : (
          <></>
        )}
        {sold.length > 0 ? (
          <>
            <Text className="font-light">Sold</Text>
            <Text>
              <Link
                className="hover:underline text-tremor-brand"
                href={`/dashboard/transactions/${sold[0].hash}`}
              >
                {truncateAddress(sold[0].hash)}
              </Link>{" "}
              on {dateTimetoDate(sold[0].block_timestamp)}
            </Text>
          </>
        ) : (
          <></>
        )}
      </Grid>
    </Card>
  );
};

export default LatestTransactionsCard;
