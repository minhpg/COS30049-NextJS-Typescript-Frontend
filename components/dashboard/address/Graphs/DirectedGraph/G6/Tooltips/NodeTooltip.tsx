"use client";

import { NodeConfig } from "@antv/g6";
import { Card, Text } from "@tremor/react";

const NodeTooltip = ({
  model,
  x,
  y,
}: {
  model: NodeConfig;
  x: number;
  y: number;
}) => {
  return (
    <Card
      className="z-40 w-80 break-all p-5 absolute"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <Text className="font-light text-xs">Address</Text>
      <Text className="text-tremor-brand text-xs">{model.id}</Text>
    </Card>
  );
};

export default NodeTooltip;
