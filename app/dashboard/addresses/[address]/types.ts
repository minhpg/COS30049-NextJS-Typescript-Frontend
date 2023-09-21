export type Address = {
  address: string;
  type: string;
};

export type BoughtStat = {
  ought: Transaction[];
  boughtAggregate: TransactionAggregate;
};

export type SoldStat = {
  sold: Transaction[];
  soldAggregate: TransactionAggregate;
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

export type AddressStatResponse = {
  data: {
    addresses: Address[];
  };
};

export const addressType: any = {
  "eoa": "Externally Owned Address",
  "contract": "Contract",
};
