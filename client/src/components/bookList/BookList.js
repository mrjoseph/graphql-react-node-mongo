import React, { Component } from 'react';
import { deleteBookMutation, getBooksQuery } from '../../queries/queries';
import { Query } from 'react-apollo';
import BookDetails from '../bookDetails';
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
    return(
      <Query query={getBooksQuery}>
        {({ loading, error, data }) => {
          console.log( loading, error, data);
          if (loading) return (<li> <span className="loading">Loading...</span></li>);
          if (error) return (<li> <span className="loading">Loading...</span></li>);
          return(
            <>{
              data.books.map(book =>
                <li key={book.id}>
                  <span className="books" onClick={(e) => {this.setState({selected: book.id})}}> {book.name}</span>
                  <span className="delete" onClick={(e) => {this.handleDeleteBook(book.id)}}>delete</span>
                </li>)
              }</>
          );
        }}
      </Query>
    );
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
export default BookList;
