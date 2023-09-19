"use client";

import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  Text,
  Grid,
} from "@tremor/react";

const ETHPriceCard = () => {
  return (
    <Card className="max-w-lg mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>ETH Price</Text>
          <Metric>$10,000</Metric>
        </div>
        <BadgeDelta>asdasd</BadgeDelta>
      </Flex>
      <Grid className="mt-4">
        <Text className="font-light">Equivalent to</Text>
        <Text>0.3 BTC</Text>
        <Text>30,000 DOGE</Text>
      </Grid>
    </Card>
  );
};

export default ETHPriceCard;
