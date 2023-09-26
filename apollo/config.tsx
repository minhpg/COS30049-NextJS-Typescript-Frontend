import { HttpLink } from "@apollo/client";

export const uri = "http://localhost:3000/api/graphql";

export const httpLink = new HttpLink({
  uri,
  fetchOptions: {
    credentials: 'same-origin',
    fetchPolicy: 'network-only', 
  }
});