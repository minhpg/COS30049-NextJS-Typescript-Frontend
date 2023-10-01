import {
	Text,
	Title,
	TabGroup,
	TabList,
	TabPanels,
	TabPanel,
	Tab,
} from "@tremor/react";
import { readFile } from "fs/promises";
// import GraphQLExplorer from "@/components/dashboard/documentation/GraphQLExplorer";
import GithubMarkdown from "@/components/dashboard/documentation/GithubMarkdown";
const Documentation = async () => {
	return (
		<>
			<Title>Documentation</Title>
			<Text>Developer API Documentation</Text>
			<TabGroup className="mt-6">
				<TabList>
					<Tab>Overview</Tab>
					<Tab>GraphQL</Tab>
					{/* <Tab>GraphQL Explorer</Tab> */}
				</TabList>
				<TabPanels>
					<TabPanel className="mt-0">
						<GithubMarkdown
							markdownData={(
								await readFile("./README.md")
							).toString()}
						/>
					</TabPanel>
					<TabPanel className="mt-0">
						<GithubMarkdown
							markdownData={(
								await readFile("./docs/schema.md")
							).toString()}
						/>
					</TabPanel>
					{/* <TabPanel className="mt-0 h-[800px]">
						<GraphQLExplorer />
					</TabPanel> */}
				</TabPanels>
			</TabGroup>
		</>
	);
};

export default Documentation;
