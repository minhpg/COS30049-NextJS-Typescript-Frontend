import { HttpLink } from "@apollo/client";

export const uri = `${
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
}/api/graphql`;

export const httpLink = new HttpLink({
	uri,
});
