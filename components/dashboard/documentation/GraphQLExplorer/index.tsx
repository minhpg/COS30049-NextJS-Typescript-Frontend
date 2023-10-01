// @ts-nocheck

"use client";
import { Card } from "@tremor/react";

import { GraphiQL } from "graphiql";
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import "graphiql/graphiql.css";
import { uri } from "@/apollo/config";
import { FooterLogo } from "@/components/Logo";

const fetcher = createGraphiQLFetcher({ url: uri });

const GraphQLExplorer = () => {
	return (
		<Card className="mt-6 p-1 h-full">
			<GraphiQL fetcher={fetcher} editorTheme="light">
				<GraphiQL.Logo>
					<FooterLogo />
				</GraphiQL.Logo>
			</GraphiQL>
		</Card>
	);
};

export default GraphQLExplorer;
