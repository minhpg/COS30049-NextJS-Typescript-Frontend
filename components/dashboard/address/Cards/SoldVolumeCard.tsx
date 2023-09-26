import { WeiToETH, numberWithCommas } from "@/utils";
import {
  Card,
  Flex,
  Metric,
  Text,
  Grid,
} from "@tremor/react";

import { getClient } from "@/apollo/server-provider";
import GetSoldStat from "@/graphql/dashboard/addresses/stat/GetSoldStat.gql"

const SoldVolumeCard = async ({address} : { address: string}) => {
  const client = getClient()
  const { data, error } = await client.query({
    query: GetSoldStat,
    variables: {
      address
    },
    errorPolicy: "ignore"
  })

  if (!data) return (
    <Card className="mx-auto">
      <Text>No data!</Text>
    </Card>
  );

  if (error) return (
    <Card className="mx-auto">
      <Text>{error.message}</Text>
    </Card>
  );

  const { soldAggregate } = data.addresses[0]
  if (!soldAggregate.node)
  return (
    <Card className="mx-auto">
      <Text>No data!</Text>
    </Card>
  );
  return (
    <Card className="mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Sold Volume</Text>
          <Metric>{WeiToETH(soldAggregate.node.value.sum)} ETH</Metric>
        </div>
      </Flex>
      <Text className="italic">over {numberWithCommas(soldAggregate.count)} transactions</Text>

      <Grid className="mt-4">
        <Text className="font-light">Highest sold</Text>
        <Text>{WeiToETH(soldAggregate.node.value.max)} ETH</Text>
      </Grid>
    </Card>
  );
};

export default SoldVolumeCard;
