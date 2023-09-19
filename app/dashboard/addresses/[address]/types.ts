export type Address = {
  address: string;
  type: string;
  bought: Transaction[];
  sold: Transaction[];
  soldAggregate: TransactionAggregate;
  boughtAggregate: TransactionAggregate;
};

export type Transaction = {
  hash: string;
  block_timestamp: string;
  from_address: {
    address: string;
  };
  to_address: {
    address: string;
  };
  gas: number;
  value: string;
};

export type TransactionAggregate = {
  count: number;
  node: {
    value: {
      sum: number;
      min: number;
      max: number;
    };
  };
};

export type TransactionTableResponse = {
  data: {
    transactions: Transaction[];
    transactionsAggregate: {
      count: number;
    };
  };
};

export type AddressStatResponse = {
  data: {
    addresses: Address[];
  };
};
