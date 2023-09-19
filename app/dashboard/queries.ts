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
    transactions(options: { limit: 25, sort: { block_timestamp: DESC } }) {
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
    getYearlyVolume {
      year
      transactionsCount
      totalValue
    }
  }
`;
