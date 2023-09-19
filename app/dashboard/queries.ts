import { gql } from "@apollo/client";

export const getDashboardData = gql`
  query {
    transactionsAggregate {
      count
      block_timestamp {
        min
        max
      }
      gas {
        average
      }
      value {
        sum
        max
        average
      }
    }
    getYearlyVolume {
      year
      transactionsCount
      totalValue
    }
  }
`;

export const getTransactions = gql`
  query getAllTransactions($offset: Int, $limit: Int) {
    transactions(
      options: { offset: $offset, limit: $limit, sort: { block_timestamp: DESC } }
    ) {
      hash
      block_timestamp
      from_address {
        address
      }
      to_address {
        address
      }
      gas
      value
    }
    transactionsAggregate {
      count
    }
  }
`;

