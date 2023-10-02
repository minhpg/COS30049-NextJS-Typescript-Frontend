import { HttpLink } from "@apollo/client";

/** GraphQL endpoint */
export const uri = `${
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
}/api/graphql`;

/** `HttpLink` for both client and server fetch */
export const httpLink = new HttpLink({
	uri,
});
