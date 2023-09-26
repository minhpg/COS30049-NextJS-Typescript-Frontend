"use client";

import React, { useState } from "react";
import {
  Select,
  Card,
  SelectItem,
  Flex,
  Title,
  Text,
  ProgressBar,
  Icon,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";

import Graphin, { Layout, Behaviors } from "@antv/graphin";
import { reduceData } from "./utils";
import { layouts } from "./graph-layouts";
import { NodeEvent } from "./graph-behaviours";
import "./fix-rounded.css";

import { useQuery } from "@apollo/client";
import GetTransactionEdgeAggregate from "@/graphql/dashboard/addresses/transactions/GetTransactionEdgeAggregate.gql";

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
  const [type, setLayout] = useState("circular");
  const handleChange = (value: string): void => {
    setLayout(value);
  };

  const layout = layouts.find((item) => item.type === type);

  return (
    <Card className="mt-6">
      <Flex>
        <Flex className="space-x-0.5" justifyContent="start">
          <Title>Visualization</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Right click to view node/edge details.&#13;Left click node to view further transactions."
          />
        </Flex>
        <Flex justifyContent="end" className="gap-2">
          <LayoutSelector
            options={layouts}
            value={type}
            onChange={handleChange}
          />
        </Flex>
      </Flex>
      <Graph address={address} layout={layout} />
    </Card>
  );
};

const { ZoomCanvas, DragNode, ActivateRelations } = Behaviors;

const Graph = ({ address, layout }: { address: string; layout?: Layout }) => {
  const { data, loading, error } = useQuery(GetTransactionEdgeAggregate, {
    variables: {
      address,
    },
  });

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Card className="rounded-none p-0 mt-6">
      <Graphin
        data={reduceData(data)}
        layout={layout}
        height={500}
        className="rounded-xl"
        autopaint={false}
      >
        <NodeEvent />
        <ActivateRelations trigger="mouseenter" />
      </Graphin>
    </Card>
  );
};

const GraphLoadingProgress = () => {
  const [progress, setProgress] = useState(0);
  setInterval(() => {
    setProgress((prev) => {
      if (prev < 100) return prev + 1;
      return 0;
    });
  }, 1);

  return <ProgressBar value={progress} />;
};

export default DirectedGraph;
