import { Address } from "@/app/dashboard/addresses/[address]/types";
import { dateTimetoDate } from "@/utils";
import { EdgeConfig } from "@antv/g6";
import { Card, Text } from "@tremor/react";

const EdgeTooltip = ({ model }: { model: EdgeConfig }) => {
  const {
    data: { hash, block_timestamp, value, to_address, from_address, gas },
  } = model;
  return (
    <Card className="z-40 w-80 break-all">
      <Text className="font-light">Transaction</Text>
      <Text className="font-semibold">{hash}</Text>
      <div className="mt-1">
        <Text className="text-xs">
          <span className="font-light">From: </span>
          <span className="text-tremor-brand">{from_address.address}</span>
        </Text>
        <Text className="text-xs">
          <span className="font-light">To: </span>
          <span className="text-tremor-brand">{to_address.address}</span>
        </Text>
      </div>
      <div className="mt-1">
        <Text className="text-xs">
          <span className="font-light">Time: </span>
          <span>{dateTimetoDate(block_timestamp)}</span>
        </Text>
        <Text className="text-xs">
          <span className="font-light">Value: </span>
          <span>{value}</span>
        </Text>
        <Text className="text-xs">
          <span className="font-light">Gas: </span>
          <span>{gas}</span>
        </Text>
      </div>
    </Card>
  );
};

export default EdgeTooltip;
