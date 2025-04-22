import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import './App.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { GraphApolloLink } from '@graphprotocol/client-apollo'
import * as GraphClient from '../.graphclient'

const client = new ApolloClient({
  link: new GraphApolloLink(GraphClient),
  cache: new InMemoryCache(),
})

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
