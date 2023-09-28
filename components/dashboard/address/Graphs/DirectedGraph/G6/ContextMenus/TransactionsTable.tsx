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
import { useEffect, useMemo, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { WeiToETH, truncateAddress } from "@/utils";

import { apolloClient } from "@/apollo/client-provider";
import { InfiniteQueryClientProvider } from "@/app/dashboard/query-client-provider";
import { Transactions } from "@/types";
import GetTransactionsBetween from "@/graphql/dashboard/addresses/graph/GetTransactionsBetween.gql";

const TransactionsTable = ({
  fromAddress,
  toAddress,
}: {
  fromAddress: string;
  toAddress: string;
}) => {
  return (
    <InfiniteQueryClientProvider>
      <DataTable fromAddress={fromAddress} toAddress={toAddress} />
    </InfiniteQueryClientProvider>
  );
};

export default TransactionsTable;

const limit = 10;

const DataTable = ({
  fromAddress,
  toAddress,
}: {
  fromAddress: string;
  toAddress: string;
}) => {
  const { ref, inView } = useInView();
  const tableRef = useRef(null);

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

  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery(
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

  const totalRowCount = data?.pages?.[0]?.transactionsAggregate?.count ?? 0;

  const totalFetched = flatData?.length;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

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
    <Table className="relative">
      <TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHeaderCell key={header.id} className="text-xs p-2">
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
        {/* {paddingTop > 0 && (
          <TableRow>
            <TableCell style={{ height: `${paddingTop}px` }}></TableCell>
          </TableRow>
        )} */}
        {virtualRows.map((virtualRow) => {
          const row = rows[virtualRow.index] as Row<any>;
          return (
            <TableRow>
              {row.getVisibleCells().map((cell: any) => {
                return (
                  <TableCell key={cell.id} className="p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
        {/* {paddingBottom > 0 && (
          <TableRow>
            <TableCell style={{ height: `${paddingBottom}px` }}></TableCell>
          </TableRow>
        )} */}

        <TableRow>
          <TableCell colSpan={4} ref={ref} className="text-xs p-2">
            Fetched {totalFetched} of {totalRowCount} rows.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
