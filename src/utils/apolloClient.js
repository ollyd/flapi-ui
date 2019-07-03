import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ErrorLink } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const httpLink = createHttpLink({
  uri: `${process.env.API_URL}/graphql`,
});

const errorLink = new ErrorLink((error) => {
  console.error('GraphQL Error:', error);
});

export default new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
