import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import {
  deleteBookMutation,
  getBooksQuery
} from '../queries/queries';
import BookDetails from '../components/bookDetails';
import './bookList.scss';
class BookList extends Component {
  constructor(){
    super();
    this.state = {
      selected: null,
    };
  }
  handleDeleteBook(id){
    const { deleteBookMutation } = this.props;
    deleteBookMutation(
        { variables:
              { id,
              },
          refetchQueries: [{ query: getBooksQuery }]
        },
    );
    this.setState({selected: null });
  }
  displayBooks() {
    const  { books, loading } = this.props.getBooksQuery;
    if (!loading) {
      return books.map(book =>
          <li key={book.id}>
             <span className="books" onClick={(e) => {this.setState({selected: book.id})}}> {book.name}</span>
             <span className="delete" onClick={(e) => {this.handleDeleteBook(book.id)}}>delete</span>
            </li>)
    }
    return (<li>Loading...</li>)
  }

  render(){
    const { selected } = this.state;
    return(
      <div className="container">
        <ul id="book-list" className="book-list">
          {this.displayBooks()}
        </ul>
        {selected && <BookDetails bookId={selected}/>}
      </div>
    );
  }
}

// This is like redux actions. We attach these to our queries
export default compose(
    graphql(getBooksQuery, {name: "getBooksQuery"}),
    graphql(deleteBookMutation, {name: "deleteBookMutation"}),
)(BookList);
