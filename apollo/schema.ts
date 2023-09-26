import { Neo4jGraphQL } from "@neo4j/graphql";
import typeDefs from '@/graphql/type-defs.gql'
import neo4j from "neo4j-driver";

const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env;

const driver = neo4j.driver(
  NEO4J_URI || "localhost",
  neo4j.auth.basic(NEO4J_USERNAME || "neo4j", NEO4J_PASSWORD || "default")
);

export const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
});
