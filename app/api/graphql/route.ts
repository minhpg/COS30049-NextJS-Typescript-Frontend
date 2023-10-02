// @ts-nocheck
// Disabled ts-checking for top-level await needed here

/** Bypass Next.js pre-rendering on build */
export const dynamic = "force-dynamic";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { getNeoSchema } from "@/apollo/schema";

/** Initializing Apollo Server */
const createApolloServer = async () => {
	const neoSchema = getNeoSchema();
	const schema = await neoSchema.getSchema();
	return new ApolloServer({ schema });
};

/** Creating GraphQL endpoint handler */
const handler = startServerAndCreateNextHandler(await createApolloServer());

export { handler as GET, handler as POST };
