import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

const client = () => {
  const httpLink = createHttpLink({
    uri: "https://fast-dusk-42878.herokuapp.com/graphql",
  })

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
}


ReactDOM.render(
    <ApolloProvider client = { client() }>
        <App />
    </ApolloProvider>,
  document.getElementById('root')
);
