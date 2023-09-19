import { HttpLink } from "@apollo/client";

export const uri = "http://localhost:8000/graphql";

export const httpLink = new HttpLink({
  uri,
  fetchOptions: {
    // mode: "no-cors",
    // fetchPolicy: 'network-only', 
  }
});