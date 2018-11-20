import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from '../components/bookDetails';
import './bookList.css';
class BookList extends Component {
  constructor(){
    super();
    this.state = {
      selected: null
    };
  }
  displayBooks() {
    const  { books, loading } = this.props.data;
    if (!loading) {
      return books.map(book => <li onClick={(e) => {this.setState({selected: book.id})}} key={book.id}>{book.name}</li>)
    }
    return (<li>Loading...</li>)
  }

  render(){
    const { selected } = this.state;
    return(
      <div className="container">
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
