/** Tooltip info for transaction detail fields */
export const tooltipInfo = {
	block_number:
		"Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was produced.",
	block_timestamp: "The date and time at which a transaction is produced.",
	gas_price: "Cost per unit of gas spent for the transaction.",
	gas_usage:
		"Maximum amount of gas allocated for the transaction. Normal ETH transfers involve 21,000 gas units while contracts involve higher values.",
	hash: "A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed.",
	input:
		"Additional data included for this transaction. Commonly used as part of contract interaction or as a message sent to the recipient.",
	transaction_fee:
		"Amount paid to process the transaction in Ether and fiat value.",
	value: "Amount paid to process the transaction in Ether and fiat value.",
	from_address: "Sending party of the transaction.",
	to_address:
		"Receiving party of the transaction (could be a contract address).",
};
