"use client";

import { YearlyVolume } from "@/app/dashboard/types";
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

const dataFormatter = (number: number) => {
  // return "$ " + Intl.NumberFormat("us").format(number).toString();
  return number;
};

const VolumeGraph = ({ data }: { data: YearlyVolume[] }) => {
  const categoriesList = ["transactionsCount", "totalValue"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCategory = categoriesList[selectedIndex];
  return (
    <Card>
      <div className="md:flex justify-between">
        <div>
          <Title>Transaction Volume</Title>
          <Text> Shows yearly transaction volume</Text>
        </div>
        <div>
          <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
            <TabList color="gray" variant="solid">
              {categoriesList.map((category) => (
                <Tab>{category}</Tab>
              ))}
            </TabList>
          </TabGroup>
        </div>
      </div>
      <AreaChart
        className="h-96"
        data={data}
        index="year"
        categories={[selectedCategory]}
        colors={["indigo"]}
      />
    </Card>
  );
};

export default VolumeGraph;
