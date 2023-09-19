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
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";

import {
  dateTimetoDate,
  numberWithCommas,
  truncateAddress,
} from "@/utils";

import { Transaction } from "@/app/dashboard/types";
import Link from "next/link";

export default function TransactionsTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title> Transaction History </Title>
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
      <Table
      // className="mt-6"
      >
        <TableHead>
          <TableRow>
            <TableHeaderCell>Hash</TableHeaderCell>
            <TableHeaderCell>Between</TableHeaderCell>
            <TableHeaderCell>Time</TableHeaderCell>
            <TableHeaderCell>Details</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map(
            ({
              hash,
              to_address,
              from_address,
              gas,
              value,
              block_timestamp,
            }) => (
              <TableRow key={hash}>
                <TableCell>
                  <Link
                    href={`/dashboard/transactions/${hash}`}
                    className="hover:underline text-tremor-brand"
                  >
                    {truncateAddress(hash)}
                  </Link>
                </TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>{dateTimetoDate(block_timestamp)}</TableCell>
                <TableCell>
                  <p className="font-light">Gas:</p>
                  <p>{numberWithCommas(gas)}</p>
                  <p className="font-light">Value:</p>
                  <p>{numberWithCommas(parseInt(value))}ETH</p>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  );
}
