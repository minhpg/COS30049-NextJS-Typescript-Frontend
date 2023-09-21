"use client";

import React, { useState } from "react";
import Graphin, { Layout, Behaviors } from "@antv/graphin";
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

import { useQuery } from "@apollo/client";
import { reduceData } from "./utils";
import { layouts } from "./graph-layouts";
import {
  EdgeEvent,
  NodeEvent,
  edgeTooltip,
  nodeTooltip,
} from "./GraphBehaviours";
import { getGraphTransactions } from "@/app/dashboard/addresses/[address]/queries";
import "./fix-rounded.css";

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
  const { data, loading, error } = useQuery(getGraphTransactions, {
    variables: {
      address,
    },
  });

  if (loading) return <Text>Loading...</Text>;
  // {
  //   return <GraphLoadingProgress />
  // }

  if (error) return <Text>{error.message}</Text>;

  return (
    <Card className="rounded-none p-0 mt-6">
      <Graphin
        data={reduceData(data?.addresses[0])}
        layout={layout}
        height={500}
        className="rounded-xl"
        plugins={[nodeTooltip, edgeTooltip]}
        autopaint={false}
      >
        <EdgeEvent />
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
