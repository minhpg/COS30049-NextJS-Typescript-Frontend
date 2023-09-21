"use client";

import { NodeConfig } from "@antv/g6";
import { Card, Text } from "@tremor/react";

const NodeTooltip = ({ model }: { model: NodeConfig }) => {
  return (
    <Card className="z-40 w-80 break-words">
      <Text className="font-light">Address</Text>
      <Text className="font-semibold">{model.id}</Text>
    </Card>
  );
};

export default NodeTooltip;
