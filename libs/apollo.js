import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.STARTGG_API_ENDPOINT,
  headers: { authorization: `Bearer ${process.env.STARTGG_AUTH_TOKEN}` },
  cache: new InMemoryCache(),
});

export default client;
