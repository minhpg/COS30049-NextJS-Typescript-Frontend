"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { httpLink } from "./config";


export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: {
    query: { 
      errorPolicy: "all", 
      // fetchPolicy: "network-only"
     },
  },
});

export const ApolloClientProvider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
