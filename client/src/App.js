import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import Booklist from './components/bookList';
import AddBook from './components/AddBook';
import AddAuthors from './components/addAuthor';
import resolvers from './resolvers/resolvers';
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});
const stateLink = withClientState({
  cache,
  resolvers,
  defaults: {
    show_type: 'BELOW_15'
  }
});
const link = ApolloLink.from([stateLink, httpLink]);

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true
});

class App extends Component {
  render() {
    return (
      <ApolloProvider  client={client}>
        <div id="main" className="container">
          <h1>Book list</h1>
          <Booklist />
          <AddBook />
          <AddAuthors />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
