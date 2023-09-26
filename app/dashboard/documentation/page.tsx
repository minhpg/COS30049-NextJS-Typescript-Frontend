import {
  Text,
  Title,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@tremor/react";

import Swagger from "@/components/dashboard/documentation/Swagger";
import GraphQLExplorer from "@/components/dashboard/documentation/GraphQLExplorer";
import Overview from "@/components/dashboard/documentation/Overview";

const Documentation = () => {
  return (
    <>
      <Title>Documentation</Title>
      <Text>Developer API Documentation</Text>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Transactions GraphQL</Tab>
          <Tab>REST API</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Overview />
          </TabPanel>
          <TabPanel className="h-full">
            <GraphQLExplorer />
          </TabPanel>
          <TabPanel>
            <Swagger />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};

export default Documentation;
