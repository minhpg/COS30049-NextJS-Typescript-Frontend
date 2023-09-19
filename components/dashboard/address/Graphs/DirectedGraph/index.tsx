"use client";

import React, { useEffect, useState } from "react";
import Graphin, { Layout } from "@antv/graphin";
import { Select, Card, SelectItem, Flex, Title, Text } from "@tremor/react";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import { reduceData } from "./utils";
import { layouts } from "./graph-layouts";
import { registerGraphEvents } from "./graph-events";
import { getGraphTransactions } from "@/app/dashboard/addresses/[address]/queries";

const LayoutSelector = ({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: any;
  options: Layout[];
}) => {
  return (
    <Select className="w-24" value={value} onChange={onChange}>
      {options.map(({ type }) => {
        return (
          <SelectItem key={type} value={type || ""}>
            {type}
          </SelectItem>
        );
      })}
    </Select>
  );
};

const DirectedGraph = ({ address }: { address: string }) => {
  const [type, setLayout] = useState("grid");
  const handleChange = (value: string): void => {
    setLayout(value);
  };

  const layout = layouts.find((item) => item.type === type);

  return (
    <Card>
      <Flex>
        <Title>Visualization</Title>
        <Flex justifyContent="end" className="gap-2">
          <LayoutSelector
            options={layouts}
            value={type}
            onChange={handleChange}
          />
          <Select className="w-24" value="1">
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
          </Select>
        </Flex>
      </Flex>
      <Graph address={address} layout={layout} />
    </Card>
  );
};

const Graph = ({ address, layout }: { address: string; layout?: Layout }) => {
  const { data, loading, error } = useQuery(getGraphTransactions, {
    variables: {
      address,
    },
  });

  if (loading) return <Text>Loading</Text>;

  if (error) return <Text><code>{JSON.stringify(error)}</code></Text>;

  const test_data = reduceData(data?.addresses[0]);

  return (
    <Card className="p-0 my-3">
      <Graphin data={test_data} layout={layout}></Graphin>
    </Card>
  );
};

export default DirectedGraph;
