import { TransactionEdgeAggregate } from "@/types";
import { WeiToETH } from "@/utils";
import { EdgeConfig } from "@antv/g6";
import { Card, Text } from "@tremor/react";

export type IEdgeTooltipModel = Partial<EdgeConfig> & {
  data: TransactionEdgeAggregate;
};

const EdgeTooltip = ({
  model,
  x,
  y,
}: {
  model: IEdgeTooltipModel;
  x: number;
  y: number;
}) => {
  const { data } = model;
  if (!data) return;
  return (
    <Card
      className="z-40 w-80 break-all p-5 absolute"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <div>
        <Text className="text-xs">
          <span className="font-light">From: </span>
          <span className="text-tremor-brand">{data.from_address.address}</span>
        </Text>
        <Text className="text-xs">
          <span className="font-light">To: </span>
          <span className="text-tremor-brand">{data.to_address.address}</span>
        </Text>
      </div>
      <div className="mt-1">
        <Text className="text-xs">
          <span className="font-light">Count: </span>
          <span>{data.count}</span>
        </Text>
        <Text className="text-xs">
          <span className="font-light">Sum: </span>
          <span>{WeiToETH(data.value.sum)} ETH</span>
        </Text>
      </div>
    </Card>
  );
};

export default EdgeTooltip;
