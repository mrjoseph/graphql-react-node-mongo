import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Booklist from './components/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider  client={client}>
        <div id="main">
          <h1>Book list</h1>
          <Booklist />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
