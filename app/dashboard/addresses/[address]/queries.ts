import { gql } from "@apollo/client";

export const getAddressStat = gql`
  query GetAddressStat($address: String) {
    addresses(where: { address: $address }) {
      address
      type
    }
  }
`;

export const getBoughtStat = gql`
query GetBoughtStat($address: String) {
  addresses(where: { address: $address }) {
    boughtAggregate {
      count
      node {
        value {
          sum
          min
          max
        }
      }
    }
  }
}
`

export const getSoldStat = gql`
query GetSoldStat($address: String) {
  addresses(where: { address: $address }) {
    soldAggregate {
      count
      node {
        value {
          sum
          min
          max
        }
      }
    }
  }
}
`

export const getLatestTransactions = gql`
query GetSoldStat($address: String) {
  addresses(where: { address: $address }) {
    sold(options: { limit: 1, sort: { block_timestamp: DESC } }) {
      hash
      block_timestamp
    }
    bought(options: { limit: 1, sort: { block_timestamp: DESC } }) {
      hash
      block_timestamp
    }
  }
}
`

export const getGraphTransactions = gql`
  query GetGraphTransactions($address: String) {
    addresses(where: { address: $address }) {
      address
      bought {
        from_address {
          address
        }
        to_address {
          address
        }
        value
        hash
        block_timestamp
      }
      sold {
        from_address {
          address
        }
        to_address {
          address
        }
        value
        hash
        block_timestamp
      }
    }
  }
`;

export const getBuyTransactions = gql`
  query getBuyTransactions($address: String, $offset: Int, $limit: Int) {
    transactions(
      where: { to_address: { address: $address } },
      options: { offset: $offset, limit: $limit }
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
    transactionsAggregate(where: { to_address: { address: $address } }) {
      count
    }
  }
`;

export const getSellTransactions = gql`
  query getSellTransactions($address: String, $offset: Int, $limit: Int) {
    transactions(
      where: { from_address: { address: $address } },
      options: { offset: $offset, limit: $limit }
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
    transactionsAggregate(where: { from_address: { address: $address } }) {
      count
    }
  }
`;
