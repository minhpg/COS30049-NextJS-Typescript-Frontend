"use client";

import {
	Card,
	Title,
	AreaChart,
	Text,
	Flex,
	TabGroup,
	TabList,
	Tab,
} from "@tremor/react";
import { range } from "lodash";
import { useState } from "react";
import { WeiToETH } from "@/utils";
import { useQuery } from "@apollo/client";

import GetNormalDistribution from "@/graphql/dashboard/GetNormalDistribution.gql";

const generateDistributionDataset = (data: any) => {
	const { total, min, max, mean, stdev } = data;

	const normalY = (x: number, mean: number, stdev: number) =>
		Math.exp(-0.5 * Math.pow((x - mean) / stdev, 2));

	const generatePoints = () => {
		let unit = (max - min) / total;
		return range(min, max, unit);
	};

	let points = generatePoints();
	let seriesData = points.map((x) => ({
		x: x / 10 ** 18,
		y: normalY(x, mean, stdev),
	}));
	return {
		series: seriesData,
		...data,
	};
};

const NormalDistributionGraph = () => {
	const categoriesList = ["Value", "Gas Price"];
	const [selectedIndex, setSelectedIndex] = useState(0);

	const { data } = useQuery(GetNormalDistribution);
	if (!data)
		return (
			<Card className="mt-6">
				<Text>Loading...</Text>
			</Card>
		);

	const { getGasPriceDistribution, getValueDistribution } = data;
	const dataset = [
		generateDistributionDataset(getValueDistribution),
		generateDistributionDataset(getGasPriceDistribution),
	];
	const selectedDataset = dataset[selectedIndex];
	const selectedCategory = categoriesList[selectedIndex];
	return (
		<Card className="mt-6">
			<div className="md:flex justify-between">
				<div className="w-full md:w-3/4">
					<Title>{selectedCategory} - Normal Distribition</Title>
					<Flex justifyContent="start" className="space-x-3 w-full">
						<Text>
							Max:{" "}
							<span className="font-light">
								{WeiToETH(selectedDataset.max)}
							</span>
						</Text>
						<Text>
							Min:{" "}
							<span className="font-light">
								{WeiToETH(selectedDataset.min)}
							</span>
						</Text>
						<Text>
							Mean:{" "}
							<span className="font-light">
								{WeiToETH(selectedDataset.mean)}
							</span>
						</Text>
						<Text>
							Standard Deviation:{" "}
							<span className="font-light">
								{selectedDataset.stdev.toPrecision(6)}
							</span>
						</Text>
					</Flex>{" "}
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
				data={selectedDataset.series}
				index="x"
				categories={["y"]}
				colors={["indigo"]}
			/>
		</Card>
	);
};

export default NormalDistributionGraph;
