"use client";
import { GraphiQL } from "graphiql";
import { createGraphiQLFetcher } from "@graphiql/toolkit";

import { uri } from "@/apollo/config";
import { FooterLogo } from "@/components/Logo";

import "graphiql/graphiql.css";
import { Card } from "@tremor/react";

const GraphQLExplorer = () => {
  const fetcher = createGraphiQLFetcher({ url: uri });
  return (
    <Card className="mt-6 p-1">
      <GraphiQL fetcher={fetcher} editorTheme="light">
        <GraphiQL.Logo>
          <FooterLogo />
        </GraphiQL.Logo>
      </GraphiQL>
    </Card>
  );
};

export default GraphQLExplorer;
