export type TransactionAggregate = {
  count: number;
  block_timestamp: {
    min: string;
    max: string;
  };
  gas: {
    average: number;
  };
  value: {
    average: number;
    sum: number;
    max: number;
  };
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

export type YearlyVolume = {
  year: number;
  transactionCount: number;
  totalValue: number;
};
