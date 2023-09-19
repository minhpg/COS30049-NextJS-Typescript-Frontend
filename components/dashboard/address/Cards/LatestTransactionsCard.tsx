"use client";

import {
  TransactionAggregate,
  Transaction,
} from "@/app/dashboard/addresses/[address]/types";
import { dateTimetoDate, numberWithCommas, truncateAddress } from "@/utils";
import { BadgeDelta, Card, Flex, Metric, Text, Grid } from "@tremor/react";
import Link from "next/link";

const LatestTransactionsCard = ({
  latestBought,
  latestSold,
  totalTransactions
}: {
  latestBought: Transaction[];
  latestSold: Transaction[];
  totalTransactions: number
}) => {
  return (
    <Card className="max-w-lg mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Total Transactions</Text>
          <Metric>{totalTransactions}</Metric>
        </div>
      </Flex>

      <Grid className="mt-4">
        {latestBought.length > 0 ? (
          <>
            <Text className="font-light">Bought</Text>
            <Text>
              <Link
                className="hover:underline text-tremor-brand"
                href={`/dashboard/transactions/${latestBought[0].hash}`}
              >
                {truncateAddress(latestBought[0].hash)}
              </Link>{" "}
              on {dateTimetoDate(latestBought[0].block_timestamp)}
            </Text>
          </>
        ) : (
          <></>
        )}
        {latestSold.length > 0 ? (
          <>
            <Text className="font-light">Sold</Text>
            <Text>
              <Link
                className="hover:underline text-tremor-brand"
                href={`/dashboard/transactions/${latestSold[0].hash}`}
              >
                {truncateAddress(latestSold[0].hash)}
              </Link>{" "}
              on {dateTimetoDate(latestSold[0].block_timestamp)}
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
