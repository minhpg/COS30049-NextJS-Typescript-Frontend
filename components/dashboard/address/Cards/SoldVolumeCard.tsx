"use client";

import { TransactionAggregate } from "@/app/dashboard/addresses/[address]/types";
import { numberWithCommas } from "@/utils";
import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  Text,
  Grid,
} from "@tremor/react";

const SoldVolumeCard = ({ data } : { data: TransactionAggregate }) => {
  return (
    <Card className="max-w-lg mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Sold Volume</Text>
          <Metric>{numberWithCommas(data.node.value.sum)}ETH</Metric>
        </div>
      </Flex>
      <Text className="italic">over {numberWithCommas(data.count)} transactions</Text>

      <Grid className="mt-4">
        <Text className="font-light">Highest sold</Text>
        <Text>{numberWithCommas(data.node.value.max)}ETH</Text>
      </Grid>
    </Card>
  );
};

export default SoldVolumeCard;
