"use client";

import {
	Table,
	TableRow,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableBody,
	Badge,
} from "@tremor/react";
import Link from "next/link";
import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	Row,
	SortingState,
	useReactTable,
} from "@tanstack/react-table";
import { useVirtual } from "@tanstack/react-virtual";
import { DocumentNode } from "graphql";
import { useEffect, useMemo, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { WeiToETH, dateTimetoDate, truncateAddress } from "@/utils";

import { apolloClient } from "@/apollo/client-provider";
import { InfiniteQueryClientProvider } from "@/app/dashboard/query-client-provider";
import { Transactions } from "@/types";

interface ITransactionTableProps {
	address?: string;
	fromAddress?: string;
	toAddress?: string;
	query: DocumentNode;
	title: string;
}

/** Transactions Table component to display transactions from query
 *
 * Using InfiniteQueryClient wrapper
 */
const TransactionsTable = (props: ITransactionTableProps) => {
	return (
		<InfiniteQueryClientProvider>
			<DataTable {...props} />
		</InfiniteQueryClientProvider>
	);
};

export default TransactionsTable;

/** Fetch limit */
const limit = 10;

/** Data table component */
const DataTable = ({
	address,
	fromAddress,
	toAddress,
	query,
	title,
}: ITransactionTableProps) => {
	/** useInView hook to check whether user has scrolled to end of page */
	const { ref, inView } = useInView();

	/** tableRef */
	const tableRef = useRef(null);

	/** Defining table columns and formatting */
	const columns = useMemo(
		() => [
			{
				accessorKey: "hash",
				header: "Hash",
				cell: (info: any) => {
					const hash = info.getValue();
					return (
						<Link
							href={`/dashboard/transactions/${hash}`}
							className="hover:underline text-tremor-brand"
						>
							{truncateAddress(hash)}
						</Link>
					);
				},
			},
			{
				accessorKey: "between",
				header: "Between",
				cell: (info: any) => {
					const { from_address, to_address } = info.getValue();
					return (
						<>
							<p className="font-light">From:</p>
							<p>
								<Link
									href={`/dashboard/addresses/${from_address.address}`}
									className="hover:underline text-tremor-brand"
								>
									{truncateAddress(from_address.address)}
								</Link>
							</p>{" "}
							<p className="font-light">To:</p>
							<p>
								<Link
									href={`/dashboard/addresses/${to_address.address}`}
									className="hover:underline text-tremor-brand"
								>
									{truncateAddress(to_address.address)}
								</Link>
							</p>
						</>
					);
				},
			},
			{
				accessorKey: "block_timestamp",
				header: "Timestamp",
				cell: (info: any) => dateTimetoDate(info.getValue()),
			},
			{
				accessorKey: "value",
				header: "Value",
				cell: (info: any) => {
					const value = info.getValue();
					return <Badge color="green">{WeiToETH(value)} ETH</Badge>;
				},
			},
		],
		[]
	);

	const [sorting, setSorting] = useState<SortingState>([]);

	/** useInfiniteQuery hook for pagination */
	const { data, fetchNextPage } = useInfiniteQuery(
		[title, sorting],
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
				query,
				variables: {
					address,
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
	const flatData = useMemo(
		() =>
			data?.pages?.flatMap(
				({ transactions }: { transactions: Transactions }) => {
					return transactions.map(
						({ hash, block_timestamp, from_address, to_address, value }) => {
							return {
								hash,
								block_timestamp,
								between: {
									from_address,
									to_address,
								},
								value,
							};
						}
					);
				}
			) ?? [],
		[data]
	);

	/** Get total row count from query response */
	const totalRowCount = data?.pages?.[0].transactionsAggregate?.count ?? 0;

	/** Count total row fetched */
	const totalFetched = flatData?.length;

	/** Check if last row in table is inview -> fetch more */
	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

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

	/** Virtualized row for infinite query */
	const rowVirtualizer = useVirtual({
		parentRef: tableRef,
		size: rows.length,
		overscan: limit,
	});

	const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
	const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
	const paddingBottom =
		virtualRows.length > 0
			? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
			: 0;

	return (
		<div ref={tableRef} className="mt-6">
			<Table className="relative">
				<TableHead>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHeaderCell key={header.id} className="sticky">
										{flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
									</TableHeaderCell>
								);
							})}
						</TableRow>
					))}
				</TableHead>
				<TableBody>
					{paddingTop > 0 && (
						<TableRow>
							<TableCell style={{ height: `${paddingTop}px` }}></TableCell>
						</TableRow>
					)}
					{virtualRows.map((virtualRow) => {
						const row = rows[virtualRow.index] as Row<any>;
						return (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell: any) => {
									return (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
					{paddingBottom > 0 && (
						<TableRow>
							<TableCell style={{ height: `${paddingBottom}px` }}></TableCell>
						</TableRow>
					)}

					<TableRow>
						<TableCell colSpan={4} ref={ref}>
							Fetched {totalFetched} of {totalRowCount} rows.
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};
