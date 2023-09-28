import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { neoSchema } from "@/apollo/schema";

const server = async () => {
  const schema = await neoSchema.getSchema();
  return new ApolloServer({ schema });
};

const handler = startServerAndCreateNextHandler(await server());

export { 
  handler as GET, 
  handler as POST 
};
