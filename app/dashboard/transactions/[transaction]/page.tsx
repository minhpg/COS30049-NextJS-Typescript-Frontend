import { Title, Text } from "@tremor/react";

import InformationCard from "@/components/dashboard/transaction/Cards/InformationCard";

import { getClient } from "@/apollo/server-provider";
import GetTransactionDetails from "@/graphql/dashboard/transactions/GetTransactionDetails.gql";
import { Transaction } from "@/types";

const TransactionPage = async ({
  params: { transaction },
}: {
  params: { transaction: string };
}) => {
  const client = getClient();
  const {
    data: { transactions },
  } = await client.query({
    query: GetTransactionDetails,
    variables: {
      hash: transaction,
    },
  });

  if (!(transactions.length > 0)) {
    return (
      <>
        <Title>{transaction}</Title>
        <Text>Transaction not found!</Text>
      </>
    );
  }

  const current_transaction: Transaction = transactions[0];

  return (
    <>
      <Title>Transaction Details</Title>
      <InformationCard transaction={current_transaction} />
    </>
  );
};

export default TransactionPage;
