"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { httpLink } from "./config";

/** Returns Apollo Client for client-side rendering  */
export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

/** Apollo Client wrapper for client-side rendering */
export const ApolloClientProvider = ({ children }: React.PropsWithChildren) => {
	return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
