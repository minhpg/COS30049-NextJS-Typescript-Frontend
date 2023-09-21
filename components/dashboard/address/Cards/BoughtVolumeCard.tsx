import { getClient } from "@/app/apollo/server-provider";
import { getBoughtStat } from "@/app/dashboard/addresses/[address]/queries";
import {
  BoughtStat,
  TransactionAggregate,
} from "@/app/dashboard/addresses/[address]/types";
import { numberWithCommas } from "@/utils";
import { BadgeDelta, Card, Flex, Metric, Text, Grid } from "@tremor/react";

const BoughtVolumeCard = async ({ address }: { address: string }) => {
  const client = getClient();
  const { data, loading, error } = await client.query({
    query: getBoughtStat,
    variables: {
      address,
    },
    errorPolicy: "ignore",
  });

  if (!data)
    return (
      <Card className="max-w-lg mx-auto">
        <Text>No data!</Text>
      </Card>
    );

  if (error)
    return (
      <Card className="max-w-lg mx-auto">
        <Text>{error.message}</Text>
      </Card>
    );

  const { boughtAggregate } = data.addresses[0];
  if (!boughtAggregate.node)
    return (
      <Card className="max-w-lg mx-auto">
        <Text>No data!</Text>
      </Card>
    );

  return (
    <Card className="max-w-lg mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Bought Volume</Text>
          <Metric>{numberWithCommas(boughtAggregate.node.value.sum)}ETH</Metric>
        </div>
      </Flex>
      <Text className="italic">
        over {numberWithCommas(boughtAggregate.count)} transactions
      </Text>

      <Grid className="mt-4">
        <Text className="font-light">Highest bought</Text>
        <Text>{numberWithCommas(boughtAggregate.node.value.max)}ETH</Text>
      </Grid>
    </Card>
  );
};

export default BoughtVolumeCard;
