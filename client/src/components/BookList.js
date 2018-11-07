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
  render(){
    const { data: { books } } = this.props;
    console.log(books);
    if(books) {
      return(
          <div>
            <ul>
              {books.map((book) => {
                return (
                    <li key={book.id}>{book.name}</li>
                );
              })}
            </ul>
          </div>
      );
    } return (
        <div>loading</div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
