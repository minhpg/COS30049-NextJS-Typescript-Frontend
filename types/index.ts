/** Infered types from GraphQL type-defs */
export type AddressType = "eoa" | "contract";

export const AddressTypeFull = {
	eoa: "Externally Owned Account",
	contract: "Contract",
};

export interface Address {
	address: string;
	type: AddressType;
	bought: Partial<Transaction>[];
	sold: Partial<Transaction>[];
}

export interface Transaction {
	block_hash: string;
	block_number: number;
	block_timestamp: string;
	gas: number;
	gas_price: number;
	gas_used: number;
	hash: string;
	input: string;
	transaction_fee: number;
	transaction_index: number;
	value: number;

	from_address: Partial<Address>;
	to_address: Partial<Address>;
}

export type Addresses = Partial<Address>[];
export type Transactions = Partial<Transaction>[];

export interface NumberAggregate {
	sum: number;
	average: number;
	min: number;
	max: number;
}

export interface VolumeStat {
	year: number;
	month: number;
	day: number;
	count: number;
	value: NumberAggregate;
}

export interface DistributionStat {
	total: number;
	min: number;
	minNonZero: number;
	max: number;
	mean: number;
	stdev: number;
}

export interface TransactionCount {
	address: Address;
	count: number;
}

export interface TransactionEdgeAggregate {
	from_address: Address;
	to_address: Address;
	count: number;
	value: NumberAggregate;
}

export interface TransactionAddressTypeAggregate {
	type: AddressType;
	count: number;
	value: NumberAggregate;
}
