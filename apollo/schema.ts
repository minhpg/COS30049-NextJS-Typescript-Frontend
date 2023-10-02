import { Neo4jGraphQL } from "@neo4j/graphql";
import typeDefs from "@/graphql/type-defs.gql";
import neo4j from "neo4j-driver";

/** Returns neo4j schema from GraphQL type-defs
 *
 * Using getter to bypass Next.js build process
 */
export const getNeoSchema = () => {
	const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env;

	const driver = neo4j.driver(
		NEO4J_URI,
		neo4j.auth.basic(NEO4J_USERNAME || "neo4j", NEO4J_PASSWORD || "default")
	);

	return new Neo4jGraphQL({
		typeDefs,
		driver,
	});
};
