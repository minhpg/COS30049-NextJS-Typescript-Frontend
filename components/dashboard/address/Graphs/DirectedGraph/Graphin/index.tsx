"use client";
import { Card, Text } from "@tremor/react";

import Graphin, { Layout, Behaviors, G6 } from "@antv/graphin";
import { NodeEvent } from "./graph-behaviours";
import "./fix-rounded.css";

import { useQuery } from "@apollo/client";
import GetTransactionEdgeAggregate from "@/graphql/dashboard/addresses/transactions/GetTransactionEdgeAggregate.gql";
import { reduceData } from "./utils";

const { ZoomCanvas, DragNode, ActivateRelations } = Behaviors;

const GraphinGraph = ({
  address,
  layout,
}: {
  address: string;
  layout?: Layout;
}) => {
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

export default GraphinGraph;
