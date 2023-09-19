"use client";

import {
  Card,
  Flex,
  Metric,
  Text,
  Grid,
} from "@tremor/react";
import { numberWithCommas } from "@/utils";
import { TransactionAggregate } from "@/app/dashboard/types";

const TransactionVolumeCard = ({ data }: { data: TransactionAggregate }) => {
  const {
    value: { average, sum, max },
  } = data;

  return (
    <Card className="max-w-lg mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Total Txn Volume</Text>
          <Metric>{numberWithCommas(sum)} ETH</Metric>
        </div>
        {/* <Badge>{parseFloat(tps.toPrecision(3))} TPS</Badge> */}
      </Flex>
      <Grid className="mt-4">
        <Text className="font-light">Average Transaction</Text>
        <Text>{numberWithCommas(parseFloat(average.toPrecision(6)))} ETH</Text>
      </Grid>
    </Card>
  );
};

export default TransactionVolumeCard;
