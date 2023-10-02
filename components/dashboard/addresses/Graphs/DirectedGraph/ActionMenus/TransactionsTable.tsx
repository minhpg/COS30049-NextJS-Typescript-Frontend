"use client";

import { Table, TableRow, TableCell, TableBody, Badge } from "@tremor/react";

import Link from "next/link";
import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from "@tanstack/react-table";
import { useMemo, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { apolloClient } from "@/apollo/client-provider";
import { InfiniteQueryClientProvider } from "@/app/dashboard/query-client-provider";
import { Transactions } from "@/types";
import { WeiToETH, truncateAddress } from "@/utils";
import GetTransactionsBetween from "@/graphql/dashboard/addresses/graph/GetTransactionsBetween.gql";

interface ITransactionTableProps {
	fromAddress: string;
	toAddress: string;
}

/** Transactions Table component to display transactions between two addresses */
const TransactionsTable = ({
	fromAddress,
	toAddress,
}: ITransactionTableProps) => {
	return (
		<InfiniteQueryClientProvider>
			<DataTable fromAddress={fromAddress} toAddress={toAddress} />
		</InfiniteQueryClientProvider>
	);
};

export default TransactionsTable;

/** Fetch limit */
const limit = 10;

/** Data table component */
const DataTable = ({ fromAddress, toAddress }: ITransactionTableProps) => {
	/** tableRef */
	const tableRef = useRef(null);

	/** Defining table columns and formatting */
	const columns = useMemo(
		() => [
			{
				accessorKey: "hash",
				header: "Transactions",
				cell: (info: any) => {
					const hash = info.getValue();
					return (
						<Link
							href={`/dashboard/transactions/${hash}`}
							className="hover:underline text-tremor-brand text-xs"
						>
							{truncateAddress(hash)}
						</Link>
					);
				},
			},
			{
				accessorKey: "value",
				header: "Value",
				cell: (info: any) => {
					const value = info.getValue();
					return (
						<Badge color="green">
							<span className="text-xs">{WeiToETH(value)} ETH</span>
						</Badge>
					);
				},
			},
		],
		[]
	);

	const [sorting, setSorting] = useState<SortingState>([]);

	/** useInfiniteQuery hook for pagination */
	const { data, fetchNextPage, isLoading } = useInfiniteQuery(
		[`edge-context-table-${fromAddress}-${toAddress}`],
		async ({ pageParam = 0 }) => {
			const offset = pageParam * limit;
			const {
				data,
			}: {
				data: {
					transactions: Transactions;
					transactionsAggregate: {
						count: number;
					};
				};
			} = await apolloClient.query({
				query: GetTransactionsBetween,
				variables: {
					from_address: fromAddress,
					to_address: toAddress,
					offset,
					limit,
				},
			});
			return data;
		},
		{
			getNextPageParam: (_lastGroup, groups) => groups.length,
			keepPreviousData: true,
			refetchOnWindowFocus: false,
		}
	);

	/** Flatten data for table rendering */
	const flatData = useMemo(() => {
		try {
			return (
				data?.pages?.flatMap(
					({ transactions }: { transactions: Transactions }) => {
						return transactions.map(({ hash, value }) => {
							return {
								hash,
								value,
							};
						});
					}
				) ?? []
			);
		} catch {
			return [];
		}
	}, [data]);

	/** Get total row count from query response */
	const totalRowCount = data?.pages?.[0].transactionsAggregate?.count ?? 0;

	/** Count total row fetched */
	const totalFetched = flatData?.length;

	/** Using react-table to render table */
	const table = useReactTable({
		data: flatData,
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	const { rows } = table.getRowModel();

	return (
		<Table ref={tableRef}>
			<TableBody>
				{rows.map((row) => (
					<TableRow key={row.id}>
						{row.getVisibleCells().map((cell: any) => {
							return (
								<TableCell key={cell.id} className="p-2">
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							);
						})}
					</TableRow>
				))}

				<TableRow>
					<TableCell colSpan={1} className="text-xs p-2">
						Fetched {totalFetched} of {totalRowCount} rows.
					</TableCell>
					{totalFetched < totalRowCount && !isLoading && (
						<TableCell
							colSpan={1}
							onClick={() => fetchNextPage()}
							className="hover:underline text-tremor-brand text-xs"
						>
							Load more
						</TableCell>
					)}
				</TableRow>
			</TableBody>
		</Table>
	);
};
