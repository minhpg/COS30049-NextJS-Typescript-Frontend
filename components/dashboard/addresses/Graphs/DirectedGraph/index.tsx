"use client";

import {
	Card,
	Flex,
	Title,
	Text,
	Col,
	Grid,
	Divider,
	Button,
} from "@tremor/react";

import { GraphContext, GraphContextProvider } from "./GraphContext";
import { useContext, useState } from "react";
import ActionMenus from "./ActionMenus";
import InfoMenus from "./InfoMenus";
import SearchBox from "./SearchBox";
import LayoutSelector from "./LayoutSelector";

/** Directed Graph component
 *
 * Using `GraphContext` provider wrapper
 */
const DirectedGraph = ({ address }: { address: string }) => {
	return (
		<GraphContextProvider address={address}>
			<GraphInternal />
		</GraphContextProvider>
	);
};

/** G6Graph component with side menus */
const G6Graph = () => {
	const context = useContext(GraphContext);
	const [tutorial, showTutorial] = useState(true);

	if (context.loading) return <Text>Loading...</Text>;

	if (context.error) return <Text>{context.error.message}</Text>;

	return (
		<>
			{tutorial && (
				<>
					<div className="absolute top-0 right-0 left-0 bottom-0 rounded-lg bg-black/70 z-30"></div>
					<div className="absolute top-0 right-0 left-0 bottom-0 rounded-lg z-40 m-6">
						<Card className="lg:h-full lg:w-1/2 mx-auto overflow-y-scroll no-scrollbar">
							<div className="prose text-tremor-content text-sm max-w-full">
							<h2 className="mt-6">Interacting with Directed Graph</h2>
								<h3>Interacting with nodes/edges</h3>
								<p>
									<ul>
										<li>
											Hover on node/edge to see connected transaction liaths
										</li>
										<li>Click on node/edge to select it</li>
										<li>
											Sidebar displays relevant information about a specific
											node/edge
										</li>
									</ul>
								</p>
								<h3>Available actions</h3>
								<p>
									These actions will allow you to view relationships between
									addresses and its details
								</p>
								<h4>Graph:</h4>
								<p>
									<ul>
										<li>Fit view</li>
										<li>Center view</li>
									</ul>
								</p>
								<h4> Nodes (Addresses):</h4>
								<p>
									<ul>
										<li>
											View further transaction paths - load transaction paths
											for selected address
										</li>
										<li>Center node into view</li>
									</ul>
								</p>
								<h4> Edges (Transactions Aggregation):</h4>
								<p>
									<ul>
										<li>View transactions</li>
									</ul>
								</p>
							</div>
							<Button onClick={() => showTutorial(false)}>
								Close
							</Button>
						</Card>
					</div>
				</>
			)}
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
						<div className="absolute top-0 left-0">
							<Button onClick={() => showTutorial(true)} className="m-3">
								Show tutorial
							</Button>
						</div>
						<div className="absolute md:hidden top-0 right-0 left-0 bottom-0 rounded-lg bg-black/70 z-30">
							<Flex flexDirection="col" alignItems="center" justifyContent="center" className="h-full">
							<Text className="text-white">Turn your device horizontally</Text>

							</Flex>
						</div>
						<div ref={context.graphRef.setRef} className="h-full w-full"></div>
					</Card>
				</Col>
			</Grid>
		</>
	);
};

const GraphInternal = () => {
	return (
		<Card className="mt-6">
			<div className="md:space-x-6 md:flex justify-between">
				<div className="w-full">
					<Title>Visualization</Title>
					<Text>Click a node or edge to see more available actions!</Text>
				</div>
				<div className="sm:flex mt-6 md:mt-0 md:space-x-3 h-full w-full justify-start md:justify-end content-center">
					<LayoutSelector />
					<SearchBox />
				</div>
			</div>
			<G6Graph />
		</Card>
	);
};

export default DirectedGraph;
