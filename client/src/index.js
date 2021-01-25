import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://fast-dusk-42878.herokuapp.com/graphql',
    fetchOptions: {
        mode: 'no-cors',
    },
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client = { client }>
        <App />
    </ApolloProvider>,
  document.getElementById('root')
);
