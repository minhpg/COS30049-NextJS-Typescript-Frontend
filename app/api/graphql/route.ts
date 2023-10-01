// @ts-nocheck
export const dynamic = "force-dynamic";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { getNeoSchema } from "@/apollo/schema";

const server = async () => {
	const neoSchema = getNeoSchema();
	const schema = await neoSchema.getSchema();
	return new ApolloServer({ schema });
};

const handler = startServerAndCreateNextHandler(await server());

export { handler as GET, handler as POST };
