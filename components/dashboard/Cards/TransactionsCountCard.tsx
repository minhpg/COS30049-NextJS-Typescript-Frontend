"use client";

import {
  Card,
  Flex,
  Metric,
  Text,
  Grid,
  Badge,
} from "@tremor/react";
import { dateTimeToEpoch, numberWithCommas } from "@/utils";
import { TransactionAggregate } from "@/app/dashboard/types";

const TransactionsCountCard = ({ data }: { data: TransactionAggregate }) => {
  const {
    count: transactionsCount,
    block_timestamp: { min: transactionTimeMin, max: transactionTimeMax },
    gas: { average: gasAverage },
  } = data;

  const tps = transactionsCount / (dateTimeToEpoch(transactionTimeMax) - dateTimeToEpoch(transactionTimeMin));
  return (
    <Card className="max-w-lg mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Total Txn</Text>
          <Metric>{numberWithCommas(transactionsCount)}</Metric>
        </div>
        <Badge>{parseFloat(tps.toPrecision(3))} TPS</Badge>
      </Flex>
      <Grid className="mt-4">
        <Text className="font-light">Average Gas Price</Text>
        <Text>
          {numberWithCommas(parseFloat(gasAverage.toPrecision(6)))} Gwei
        </Text>
      </Grid>
    </Card>
  );
};

export default TransactionsCountCard;
