"use client";

import { useState } from "react";
import {
  Select,
  Card,
  SelectItem,
  Flex,
  Title,
  Icon,
  Text,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";

import { Layout } from "@antv/graphin";
import { layouts } from "./graph-layouts";
import G6Graph from "./G6";
import GraphinGraph from "./Graphin";

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
  const [type, setLayout] = useState("random");
  const handleChange = (value: string): void => {
    setLayout(value);
  };

  const layout = layouts.find((item) => item.type === type);

  return (
    <Card className="mt-6">
      <Flex>
        <div className="w-full">
          <Title>Visualization</Title>
          <Text>
            Right click to view node/edge details. Left click node to view
            further transactions.
          </Text>
        </div>
        <Flex justifyContent="end" className="gap-2">
          <LayoutSelector
            options={layouts}
            value={type}
            onChange={handleChange}
          />
        </Flex>
      </Flex>
      <G6Graph address={address} layout={layout} />
      {/* <GraphinGraph address={address} layout={layout} /> */}
    </Card>
  );
};

export default DirectedGraph;
