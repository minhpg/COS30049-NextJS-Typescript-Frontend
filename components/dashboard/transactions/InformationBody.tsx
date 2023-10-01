"use client";

import {
	Grid,
	Icon,
	Text,
	Card,
	Col,
	Flex,
	Divider,
	Table,
	TableBody,
	TableRow,
	TableCell,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { WeiToETH, dateTimetoDate, numberWithCommas } from "@/utils";
import Link from "next/link";
import { Transaction } from "@/types";

const tooltipInfo = {
	// block_hash: "A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed.",
	block_number:
		"Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was produced.",
	block_timestamp: "The date and time at which a transaction is produced.",
	gas: "",
	gas_price: "Cost per unit of gas spent for the transaction.",
	gas_usage:
		"Maximum amount of gas allocated for the transaction & the amount eventually used. Normal ETH transfers involve 21,000 gas units while contracts involve higher values.",
	hash: "A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed.",
	input: "Additional data included for this transaction. Commonly used as part of contract interaction or as a message sent to the recipient.",
	transaction_fee:
		"Amount paid to process the transaction in Ether and fiat value.",
	transaction_index: "",
	value: "Amount paid to process the transaction in Ether and fiat value.",
	from_address: "Sending party of the transaction.",
	to_address:
		"Receiving party of the transaction (could be a contract address).",
};

const InformationBody = ({ transaction }: { transaction: Transaction }) => {
	const {
		block_hash,
		block_number,
		block_timestamp,
		gas,
		gas_price,
		gas_used,
		hash,
		input,
		transaction_fee,
		transaction_index,
		value,
		from_address: { address: from_address },
		to_address: { address: to_address },
	} = transaction;

	return (
		<Card className="mt-6">
			<Table className="gap-2  overflow-y-scroll no-scrollbar p-0">
				<TableBody>
					<TableRow>
						<TableCell>
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.hash}
								/>
								<Text>Transaction Hash:</Text>
							</Flex>
						</TableCell>
						<TableCell>
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full"
							>
								<Text>{hash}</Text>
							</Flex>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							{" "}
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.block_number}
								/>
								<Text>Block:</Text>
							</Flex>
						</TableCell>
						<TableCell>
							{" "}
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full"
							>
								<Text>{block_number}</Text>
							</Flex>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.block_timestamp}
								/>
								<Text>Timestamp:</Text>
							</Flex>
						</TableCell>
						<TableCell>
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full"
							>
								<Text>{dateTimetoDate(block_timestamp)}</Text>
							</Flex>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.from_address}
								/>
								<Text>From:</Text>
							</Flex>
						</TableCell>
						<TableCell>
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full"
							>
								<Text>
									<Link
										href={`/dashboard/addresses/${from_address}`}
										className="hover:underline text-tremor-brand"
									>
										{from_address}
									</Link>
								</Text>
							</Flex>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.to_address}
								/>
								<Text>Interacted with (To):</Text>
							</Flex>
						</TableCell>
						<TableCell>
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full"
							>
								<Text>
									<Link
										href={`/dashboard/addresses/${to_address}`}
										className="hover:underline text-tremor-brand"
									>
										{to_address}
									</Link>
								</Text>
							</Flex>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.value}
								/>
								<Text>Value:</Text>
							</Flex>
						</TableCell>
						<TableCell>
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full"
							>
								<Text>{WeiToETH(value)} ETH</Text>
							</Flex>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.transaction_fee}
								/>
								<Text>Transaction Fee:</Text>
							</Flex>
						</TableCell>
						<TableCell>
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full"
							>
								<Text>{WeiToETH(transaction_fee)} ETH</Text>
							</Flex>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.gas_price}
								/>
								<Text>Gas Price:</Text>
							</Flex>
						</TableCell>
						<TableCell>
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full"
							>
								<Text>
									{numberWithCommas(gas_price / 10 ** 9)} Gwei{" "}
									<span className="opacity-70">
										({WeiToETH(gas_price)} ETH)
									</span>
								</Text>
							</Flex>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.gas_usage}
								/>
								<Text>Gas Usage:</Text>
							</Flex>{" "}
						</TableCell>{" "}
						<TableCell>
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full"
							>
								<Text>
									{numberWithCommas(gas_used)} |{" "}
									{numberWithCommas(gas)} (
									{(gas_used / gas) * 100}%)
								</Text>
							</Flex>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Flex
								justifyContent="start"
								className="space-x-1.5"
								alignItems="center"
							>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip={tooltipInfo.input}
								/>
								<Text>Input Data:</Text>
							</Flex>
						</TableCell>
						<TableCell>
							<Flex
								alignItems="center"
								justifyContent="start"
								className="h-full w-full"
							>
								<Card className="p-0 w-full">
									<textarea
										className="border-0 w-full rounded-xl h-full -mb-1"
										style={{
											fontFamily: "monospace",
										}}
										value={input}
										readOnly
									></textarea>
								</Card>
							</Flex>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</Card>
	);
};

export default InformationBody;
