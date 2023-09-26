import { BadgeDelta, Card, Flex, Metric, Text, Grid } from "@tremor/react";
import { WeiToETH, numberWithCommas } from "@/utils";

import { getClient } from "@/apollo/server-provider";
import GetBoughtStat from "@/graphql/dashboard/addresses/stat/GetBoughtStat.gql"

const BoughtVolumeCard = async ({ address }: { address: string }) => {
  const client = getClient();
  const { data, loading, error } = await client.query({
    query: GetBoughtStat,
    variables: {
      address,
    },
    errorPolicy: "ignore",
  });

  if (!data)
    return (
      <Card className="mx-auto">
        <Text>No data!</Text>
      </Card>
    );

  if (error)
    return (
      <Card className="mx-auto">
        <Text>{error.message}</Text>
      </Card>
    );

  const { boughtAggregate } = data.addresses[0];
  if (!boughtAggregate.node)
    return (
      <Card className="mx-auto">
        <Text>No data!</Text>
      </Card>
    );

  return (
    <Card className="mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Bought Volume</Text>
          <Metric>{WeiToETH(boughtAggregate.node.value.sum)} ETH</Metric>
        </div>
      </Flex>
      <Text className="italic">
        over {numberWithCommas(boughtAggregate.count)} transactions
      </Text>

      <Grid className="mt-4">
        <Text className="font-light">Highest bought</Text>
        <Text>{WeiToETH(boughtAggregate.node.value.max)} ETH</Text>
      </Grid>
    </Card>
  );
};

export default BoughtVolumeCard;
