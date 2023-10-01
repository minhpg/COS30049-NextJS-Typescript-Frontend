"use client";

import { Card, Flex, Title, Text, Col, Grid, Divider } from "@tremor/react";

import { GraphContext, GraphContextProvider } from "./GraphContext";
import { useContext } from "react";
import ActionMenus from "./ActionMenus";
import InfoMenus from "./InfoMenus";
import SearchBox from "./SearchBox";
import LayoutSelector from "./LayoutSelector";

const DirectedGraph = ({ address }: { address: string }) => {
	return (
		<GraphContextProvider address={address}>
			<GraphInternal />
		</GraphContextProvider>
	);
};

const G6Graph = () => {
	const context = useContext(GraphContext);

	if (context.loading) return <Text>Loading...</Text>;

	if (context.error) return <Text>{context.error.message}</Text>;

	return (
		<Grid numItemsLg={6} numItemsMd={4} numItemsSm={4} className="gap-4">
			<Col numColSpan={4} numColSpanLg={2} numColSpanMd={4} numColSpanSm={4}>
				<Card className="p-5 break-all mt-6 lg:h-[500px] w-full">
					<div>
						<InfoMenus />
					</div>
					<Divider className="my-3" />
					<div className="mt-4">
						<ActionMenus />
					</div>
				</Card>
			</Col>
			<Col numColSpan={4} numColSpanLg={4}>
				<Card className="rounded-none p-0 lg:mt-6">
					<div ref={context.graphRef.setRef} className="h-full w-full"></div>
				</Card>
			</Col>
		</Grid>
	);
};

const GraphInternal = () => {
	return (
		<Card className="mt-6">
			<Flex className="space-x-6">
				<div className="w-full">
					<Title>Visualization</Title>
					<Text>Click a node or edge to see more available actions!</Text>
				</div>
				<LayoutSelector />
				<SearchBox />
			</Flex>
			<G6Graph />
		</Card>
	);
};

export default DirectedGraph;
