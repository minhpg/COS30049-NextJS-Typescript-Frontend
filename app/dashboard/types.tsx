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

export type TransactionTableResponse = {
  data: {
    transactions: Transaction[];
    transactionsAggregate: {
      count: number;
    };
  };
};

export type DashboardDataResponse =  {
  data: {
    transactionsAggregate: TransactionAggregate;
    getYearlyVolume: YearlyVolume[];
  };
}

export type TransactionSearchData = {
  hash: string
}

export type AddressSearchData = {
  address: string
}

export type SearchDataResponse = {
  addresses: AddressSearchData[]
  transactions: TransactionSearchData[]
}