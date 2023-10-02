"use client";

import {
	Card,
	Title,
	AreaChart,
	Text,
	TabGroup,
	TabList,
	Tab,
} from "@tremor/react";
import { useState } from "react";
import { useQuery } from "@apollo/client";

import GetMonthlyVolume from "@/graphql/dashboard/GetMonthlyVolume.gql";
import { VolumeStat } from "@/types";

/** Plotting transaction volume statistics (`count, sum, average`)*/
const VolumeGraph = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const categoriesList = ["Transaction Count", "Total Value", "Average Value"];
	const dataKeys = ["transactionsCount", "totalValue", "averageValue"];

	const selectedCategory = dataKeys[selectedIndex];

	const { data } = useQuery(GetMonthlyVolume);

	if (!data)
		return (
			<Card className="mt-6">
				<Text>Loading...</Text>
			</Card>
		);

	/** Data formatting*/
	const graphData = data.getMonthlyVolume.map(
		({ year, month, value: { sum, average }, count }: VolumeStat) => {
			return {
				/** Display year and month */
				month: `${month}/${year}`,
				/** Converting Wei to ETH */
				totalValue: sum / 10 ** 18,
				/** Converting Wei to ETH */
				averageValue: average / 10 ** 18,
				transactionsCount: count,
			};
		}
	);

	return (
		<Card className="mt-6">
			<div className="md:flex justify-between">
				<div>
					<Title>Transaction Volume</Title>
					<Text> Shows monthly transaction volume</Text>
				</div>
				<div className="mt-6 md:mt-0 overflow-x-scroll no-scrollbar">
					<TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
						<TabList color="gray" variant="solid">
							{categoriesList.map((category) => (
								<Tab key={category}>{category}</Tab>
							))}
						</TabList>
					</TabGroup>
				</div>
			</div>
			<AreaChart
				className="h-96 mt-6 md:mt-0"
				data={graphData}
				index="month"
				categories={[selectedCategory]}
				colors={["indigo"]}
			/>
		</Card>
	);
};

export default VolumeGraph;
