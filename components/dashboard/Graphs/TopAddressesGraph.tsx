"use client";

import { useQuery } from "@apollo/client";
import { Card, Title, Text, DonutChart, Col, Grid } from "@tremor/react";
import GetTopAddresses from "@/graphql/dashboard/GetTopAddresses.gql";

const TopAddressesGraph = () => {
	const { data } = useQuery(GetTopAddresses);

	if (!data)
		return (
			<Card className="mt-6">
				<Text>Loading...</Text>
			</Card>
		);

	const {
		// getTopSellAddresses,
		getTopBuyAddresses,
		transactionAddressTypeAggregate,
	} = data;

	return (
		<div className="mt-6">
			<Title>Top Transaction Volumes</Title>
			<Grid numItemsLg={3} numItemsMd={2} className="mt-6 gap-6">
				<Col>
					<Card>
						<DonutChart
							className="h-72"
							data={getTopBuyAddresses}
							label="Bought Addresses"
							index="address"
							category="count"
							colors={[
								"violet",
								"indigo",
								"rose",
								"cyan",
								"amber",
							]}
						/>
					</Card>
				</Col>
				{/* <Col>
          <Card>
            <DonutChart
              className="h-72"
              data={getTopSellAddresses}
              label="Sold Addresses"
              index="address"
              category="count"
              colors={["violet", "indigo", "rose", "cyan", "amber"]}
            />
          </Card>
        </Col> */}
				<Col>
					<Card>
						<DonutChart
							className="h-72"
							data={transactionAddressTypeAggregate}
							label="Address Type"
							index="type"
							category="count"
							colors={["indigo", "rose"]}
						/>
					</Card>
				</Col>
			</Grid>
		</div>
	);
};

export default TopAddressesGraph;
