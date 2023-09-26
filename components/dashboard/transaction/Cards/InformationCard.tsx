"use client";
import {
  Grid,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Icon,
  Title,
  Text,
  Card,
  Col,
  Flex,
  Divider,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { WeiToETH, dateTimetoDate, numberWithCommas } from "@/utils";
import Link from "next/link";
import { Transaction } from "@/types";

const tooltipInfo = {
  block_hash: "",
  block_number: "",
  block_timestamp: "",
  gas: "",
  gas_price: "",
  gas_used: "",
  hash: "",
  input: "",
  transaction_fee: "",
  transaction_index: "",
  value: "",
  from_address: "Sending party of the transaction",
  to_address: "",
};

const InformationCard = ({ transaction }: { transaction: Transaction }) => {
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
      <Grid numItems={4} className="gap-2">
        <Col numColSpan={1}>
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
        </Col>
        <Col numColSpan={3}>
          <Flex alignItems="center" justifyContent="start" className="h-full">
            <Text>{hash}</Text>
          </Flex>
        </Col>
        <Col numColSpan={1}>
          <Flex
            justifyContent="start"
            className="space-x-1.5"
            alignItems="center"
          >
            <Icon icon={InformationCircleIcon} variant="simple" tooltip="" />
            <Text>Block:</Text>
          </Flex>
        </Col>
        <Col numColSpan={3}>
          <Flex alignItems="center" justifyContent="start" className="h-full">
            <Text>{block_number}</Text>
          </Flex>
        </Col>
        <Col numColSpan={1}>
          <Flex
            justifyContent="start"
            className="space-x-1.5"
            alignItems="center"
          >
            <Icon icon={InformationCircleIcon} variant="simple" tooltip="" />
            <Text>Timestamp:</Text>
          </Flex>
        </Col>
        <Col numColSpan={3}>
          <Flex alignItems="center" justifyContent="start" className="h-full">
            <Text>{dateTimetoDate(block_timestamp)}</Text>
          </Flex>
        </Col>
        <Col numColSpan={4} className="-my-4">
          <Divider />
        </Col>
        <Col numColSpan={1}>
          <Flex
            justifyContent="start"
            className="space-x-1.5"
            alignItems="center"
          >
            <Icon icon={InformationCircleIcon} variant="simple" tooltip="" />
            <Text>From:</Text>
          </Flex>
        </Col>
        <Col numColSpan={3}>
          <Flex alignItems="center" justifyContent="start" className="h-full">
            <Text>
              <Link
                href={`/dashboard/addresses/${from_address}`}
                className="hover:underline text-tremor-brand"
              >
                {from_address}
              </Link>
            </Text>
          </Flex>
        </Col>
        <Col numColSpan={1}>
          <Flex
            justifyContent="start"
            className="space-x-1.5"
            alignItems="center"
          >
            <Icon icon={InformationCircleIcon} variant="simple" tooltip="" />
            <Text>Interacted with (To):</Text>
          </Flex>
        </Col>
        <Col numColSpan={3}>
          <Flex alignItems="center" justifyContent="start" className="h-full">
            <Text>
              <Link
                href={`/dashboard/addresses/${to_address}`}
                className="hover:underline text-tremor-brand"
              >
                {to_address}
              </Link>
            </Text>
          </Flex>
        </Col>
        <Col numColSpan={4} className="-my-4">
          <Divider />
        </Col>
        <Col numColSpan={1}>
          <Flex
            justifyContent="start"
            className="space-x-1.5"
            alignItems="center"
          >
            <Icon icon={InformationCircleIcon} variant="simple" tooltip="" />
            <Text>Value:</Text>
          </Flex>
        </Col>
        <Col numColSpan={3}>
          <Flex alignItems="center" justifyContent="start" className="h-full">
            <Text>{WeiToETH(value)} ETH</Text>
          </Flex>
        </Col>
        <Col numColSpan={1}>
          <Flex
            justifyContent="start"
            className="space-x-1.5"
            alignItems="center"
          >
            <Icon icon={InformationCircleIcon} variant="simple" tooltip="" />
            <Text>Transaction Fee:</Text>
          </Flex>
        </Col>
        <Col numColSpan={3}>
          <Flex alignItems="center" justifyContent="start" className="h-full">
            <Text>{WeiToETH(transaction_fee)} ETH</Text>
          </Flex>
        </Col>
        <Col numColSpan={1}>
          <Flex
            justifyContent="start"
            className="space-x-1.5"
            alignItems="center"
          >
            <Icon icon={InformationCircleIcon} variant="simple" tooltip="" />
            <Text>Gas Price:</Text>
          </Flex>
        </Col>
        <Col numColSpan={3}>
          <Flex alignItems="center" justifyContent="start" className="h-full">
            <Text>
              {numberWithCommas(gas_price / 10 ** 9)} Gwei{" "}
              <span className="opacity-70">({WeiToETH(gas_price)} ETH)</span>
            </Text>
          </Flex>
        </Col>
        <Col numColSpan={1}>
          <Flex
            justifyContent="start"
            className="space-x-1.5"
            alignItems="center"
          >
            <Icon icon={InformationCircleIcon} variant="simple" tooltip="" />
            <Text>Gas Usage:</Text>
          </Flex>
        </Col>
        <Col numColSpan={3}>
          <Flex alignItems="center" justifyContent="start" className="h-full">
            <Text>{(gas_used / gas) * 100}%</Text>
          </Flex>
        </Col>
        <Col numColSpan={1}>
          <Flex
            justifyContent="start"
            className="space-x-1.5"
            alignItems="center"
          >
            <Icon icon={InformationCircleIcon} variant="simple" tooltip="" />
            <Text>Input Data:</Text>
          </Flex>
        </Col>
        <Col numColSpan={3}>
          <Flex
            alignItems="center"
            justifyContent="start"
            className="h-full w-full"
          >
            <textarea
              className="w-full bg-black bg-opacity-10 rounded-xl p-2"
              style={{
                fontFamily: "monospace",
              }}
            >
              {input}
            </textarea>
          </Flex>
        </Col>
      </Grid>
    </Card>
  );
};

export default InformationCard;
