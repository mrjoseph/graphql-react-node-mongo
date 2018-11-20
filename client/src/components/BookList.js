import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

class BookList extends Component {
  displayBooks() {
    const  { books, loading } = this.props.data;
    if (!loading) {
      return books.map(book => <li key={book.id}>{book.name}</li>)
    }
    return (<li>Loading...</li>)
  }

  render(){
    return(
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
