import { Card, Flex, Metric, Text, Grid, Badge } from "@tremor/react";
import { dateTimeToEpoch, numberWithCommas } from "@/utils";
import { NumberAggregate } from "@/types";

const TransactionsCountCard = ({
  data,
}: {
  data: {
    count: number;
    block_timestamp: {
      min: string;
      max: string;
    };
    gas: NumberAggregate;
  };
}) => {
  const {
    count: transactionsCount,
    block_timestamp: { min: transactionTimeMin, max: transactionTimeMax },
    gas: { average: gasAverage },
  } = data;

  const tps =
    transactionsCount /
    (dateTimeToEpoch(transactionTimeMax) - dateTimeToEpoch(transactionTimeMin));
  return (
    <Card className="mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Total Txn</Text>
          <Metric>{numberWithCommas(transactionsCount)}</Metric>
        </div>
        <Badge>{parseFloat(tps.toPrecision(3))} TPS</Badge>
      </Flex>
      <Grid className="mt-4">
        <Text className="font-light">Average Gas Price</Text>
        <Text>{numberWithCommas(gasAverage)} Wei</Text>
      </Grid>
    </Card>
  );
};

export default TransactionsCountCard;
