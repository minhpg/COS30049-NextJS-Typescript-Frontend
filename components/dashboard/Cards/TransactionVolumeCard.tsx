import { Card, Flex, Metric, Text, Grid } from "@tremor/react";
import { WeiToETH } from "@/utils";
import { NumberAggregate } from "@/types";

const TransactionVolumeCard = ({ data } : { data: {
  value: NumberAggregate
}}) => {
  const {
    value: { average, sum, max },
  } = data;

  return (
    <Card className="mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Total Txn Volume</Text>
          <Metric>{WeiToETH(sum)} ETH</Metric>
        </div>
        {/* <Badge>{parseFloat(tps.toPrecision(3))} TPS</Badge> */}
      </Flex>
      <Grid className="mt-4">
        <Text className="font-light">Average Transaction</Text>
        <Text>{parseFloat(WeiToETH(average))} ETH</Text>
      </Grid>
    </Card>
  );
};

export default TransactionVolumeCard;
