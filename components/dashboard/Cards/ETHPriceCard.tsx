import { numberWithCommas } from "@/utils";
import { BadgeDelta, Card, Flex, Metric, Text, Grid } from "@tremor/react";

const ETHPriceCard = async () => {
  try {
    const response = await fetch(
      "https://api.coinbase.com/v2/exchange-rates?currency=ETH"
    );
    const {
      data: { rates },
    } = await response.json();
    return (
      <Card className="mx-auto">
        <Flex alignItems="start">
          <div>
            <Text>ETH Price</Text>
            <Metric>${numberWithCommas(parseFloat(rates.USD))}</Metric>
          </div>
        </Flex>
        <Grid className="mt-4">
          <Text className="font-light">Equivalent to</Text>
          <Text>{numberWithCommas(parseFloat(rates.BTC))} BTC</Text>
          <Text>{numberWithCommas(parseFloat(rates.DOGE))} DOGE</Text>
        </Grid>
      </Card>
    );
  } catch (e) {
    return (
      <Card className="mx-auto">
        <Text>Error: {e.message}</Text>
      </Card>
    );
  }
};

export default ETHPriceCard;
