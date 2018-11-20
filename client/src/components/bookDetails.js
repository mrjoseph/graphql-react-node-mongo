import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries'
class BookDetails extends Component {
  render() {
   const { data: { book } } = this.props;
    if (book) {
      const { name, genre, author: { name: authorName, age, books} } = book;
      return(
        <div>
          <h3>Book details</h3>
          <ul id="book-details">
            <li>Name: {name}</li>
            <li>Genre: {genre}</li>
            <li>Author:{authorName}</li>
            <li>Age: {age}</li>
            <li>
              <ul>
                <h5>Other books</h5>
                {books.map((book) => {
                  return(
                      <li key={book.id}>{book.name}</li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </div>
      );
    }
    return(<div>
      <h3>Book details</h3>
      no books selected
    </div>)
  }
}

export default graphql(getBookQuery, {
  options:(props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);
