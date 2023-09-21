import { getClient } from "@/app/apollo/server-provider";
import { getSoldStat } from "@/app/dashboard/addresses/[address]/queries";
import { numberWithCommas } from "@/utils";
import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  Text,
  Grid,
} from "@tremor/react";

const SoldVolumeCard = async ({address} : { address: string}) => {
  const client = getClient()
  const { data, error } = await client.query({
    query: getSoldStat,
    variables: {
      address
    },
    errorPolicy: "ignore"
  })

  if (!data) return (
    <Card className="max-w-lg mx-auto">
      <Text>No data!</Text>
    </Card>
  );

  if (error) return (
    <Card className="max-w-lg mx-auto">
      <Text>{error.message}</Text>
    </Card>
  );

  const { soldAggregate } = data.addresses[0]
  if (!soldAggregate.node)
  return (
    <Card className="max-w-lg mx-auto">
      <Text>No data!</Text>
    </Card>
  );
  return (
    <Card className="max-w-lg mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Sold Volume</Text>
          <Metric>{numberWithCommas(soldAggregate.node.value.sum)}ETH</Metric>
        </div>
      </Flex>
      <Text className="italic">over {numberWithCommas(soldAggregate.count)} transactions</Text>

      <Grid className="mt-4">
        <Text className="font-light">Highest sold</Text>
        <Text>{numberWithCommas(soldAggregate.node.value.max)}ETH</Text>
      </Grid>
    </Card>
  );
};

export default SoldVolumeCard;
