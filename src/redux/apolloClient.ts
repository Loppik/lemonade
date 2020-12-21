import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://backend.staging.lemonade.social/graphql',
  cache: new InMemoryCache()
});

export default client;
