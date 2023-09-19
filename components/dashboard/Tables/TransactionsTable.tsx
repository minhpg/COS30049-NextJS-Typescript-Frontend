"use client";

import {
  Icon,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Title,
  Flex,
  Card,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { dateTimetoDate, numberWithCommas, truncateAddress } from "@/utils";
import { TransactionTableResponse } from "@/app/dashboard/types";
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
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { apolloClient } from "@/app/apollo/client-provider";
import { uniqueId } from "lodash";
import { InfiniteQueryClientProvider } from "@/app/dashboard/query-client-provider";

export default function TransactionsTable({
  address,
  query,
  title,
}: {
  address: string;
  query: DocumentNode;
  title: string;
}) {
  return (
    <Card>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title>{title || "Transaction History"}</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows recent transactions"
          />
        </Flex>
      </div>
      {/* <div className="flex space-x-2">
        <Select className="max-w-full sm:max-w-xs" defaultValue="all">
          <SelectItem value="all">All Performances</SelectItem>
          <SelectItem value="overperforming">Overperforming</SelectItem>
          <SelectItem value="average">Average</SelectItem>
          <SelectItem value="underperforming">Underperforming</SelectItem>
        </Select>
      </div> */}
      <InfiniteQueryClientProvider>
        <DataTable address={address} query={query} title={title} />
      </InfiniteQueryClientProvider>
    </Card>
  );
}
const limit = 10;

const DataTable = ({
  address,
  query,
  title,
}: {
  address: string;
  query: DocumentNode;
  title: string;
}) => {
  const rerender = useReducer(() => ({}), {})[1];
  const tableRef = useRef(null);

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
        accessorKey: "details",
        header: "Details",
        cell: (info: any) => {
          const { gas, value } = info.getValue();
          return (
            <>
              <p className="font-light">Gas:</p>
              <p>{numberWithCommas(gas)}</p>
              <p className="font-light">Value:</p>
              <p>{numberWithCommas(parseInt(value))}ETH</p>
            </>
          );
        },
      },
    ],
    []
  );

  const [sorting, setSorting] = useState<SortingState>([]);

  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery(
    [title, sorting],
    async ({ pageParam = 0 }) => {
      const offset = pageParam * limit;
      console.log("fetching page " + pageParam);
      const { data }: TransactionTableResponse = await apolloClient.query({
        query,
        variables: {
          address,
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

  const flatData = useMemo(
    () =>
      data?.pages?.flatMap(({ transactions }) => {
        return transactions.map(
          ({ hash, block_timestamp, from_address, to_address, gas, value }) => {
            return {
              hash,
              block_timestamp,
              between: {
                from_address,
                to_address,
              },
              details: {
                gas,
                value,
              },
            };
          }
        );
      }) ?? [],
    [data]
  );

  const totalRowCount = data?.pages?.[0].transactionsAggregate?.count ?? 0;

  const totalFetched = flatData?.length;

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        console.log(scrollHeight, scrollTop, clientHeight);
        const scrolledToBottom = scrollHeight - scrollTop - clientHeight < 100;
        const reachedEndData = !(totalFetched < totalRowCount);
        if (scrolledToBottom && !reachedEndData && !isFetching) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalRowCount]
  );

  // a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  useEffect(() => {
    fetchMoreOnBottomReached(tableRef.current);
  }, [fetchMoreOnBottomReached]);

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
    <Card
      className="max-h-screen overflow-y-scroll mt-3"
      onScroll={e => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
      ref={tableRef}
    >
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHeaderCell key={header.id}>
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
              <TableCell style={{ height: `${paddingTop}px` }} />
            </TableRow>
          )}
          {virtualRows.map((virtualRow) => {
            const row = rows[virtualRow.index] as Row<any>;
            return (
              <TableRow>
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
              <TableCell style={{ height: `${paddingBottom}px` }} />
            </TableRow>
          )}
          <TableRow>
            <TableCell colSpan={2}>
              Fetched {totalFetched} of {totalRowCount} rows.
            </TableCell>
            {/* {totalFetched < totalRowCount && (
              <TableCell
                onClick={() => {
                  console.log("clicked")
                  if(!isFetching) fetchNextPage()
                }}
                colSpan={2}
                className="hover:underline text-tremor-brand"
              >
                Load more
              </TableCell>
            )} */}
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};
