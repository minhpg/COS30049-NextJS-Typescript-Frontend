"use client";

import { useQuery } from "@apollo/client";
import { Card, Title, Text, ScatterChart } from "@tremor/react";
import { range } from "lodash";

import GetAllTransactions from "@/graphql/dashboard/GetAllTransactions.gql";

const ValueTransactionFeeScatterGraph = () => {
  const { data } = useQuery(GetAllTransactions);
  if (!data)
    return (
      <Card>
        <Text>Loading...</Text>
      </Card>
    );

  const graphData = data.transactions.map(
    ({ value, transaction_fee, hash }: any) => {
      return {
        value: value / 10 ** 18,
        transaction_fee: transaction_fee / 10 ** 18,
        hash,
      };
    }
  );

  return (
    <Card className="mt-6">
      <div className="md:flex justify-between">
        <div className="w-full">
          <Title>Value vs Transaction Fee</Title>
          <Text>Relationship between Value and Transaction Fee</Text>
        </div>
      </div>
      <ScatterChart
        className="h-96 mt-6"
        data={graphData}
        x="value"
        y="transaction_fee"
        category="hash"
        showLegend={false}
        showGridLines={true}
      />
    </Card>
  );
};

export default ValueTransactionFeeScatterGraph;
