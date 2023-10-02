"use client";

import {
	Icon,
	Text,
	Card,
	Flex,
	Table,
	TableBody,
	TableRow,
	TableCell,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";

import { WeiToETH, dateTimetoDate, numberWithCommas } from "@/utils";
import { Transaction } from "@/types";
import { tooltipInfo } from "./tooltip-info";

/** Component to display transaction details */
const InformationBody = ({ transaction }: { transaction: Transaction }) => {
	/** Destructuring transaction details */
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
									{numberWithCommas(gas_used)} | {numberWithCommas(gas)} (
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
