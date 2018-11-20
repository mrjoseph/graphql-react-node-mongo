import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  displayAuthors() {
    const  { authors, loading } = this.props.getAuthorsQuery;
    if (!loading) {
      return authors.map(author => <option value={author.id} key={author.id}>{author.name}</option>)
    }
    return (<option>books...</option>)
  }
  handleSubmit(e){
    e.preventDefault();
    const { addBookMutation } = this.props;
    const { name, genre, authorId } = this.state;
    addBookMutation(
      { variables:
        { name,
          genre,
          authorId
        },
        refetchQueries: [{ query: getBooksQuery }]
      },
    );
  }

  render(){
      return(
          <form id="add-book" onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Book name:</label>
              <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
            </div>
            <div className="field">
              <label>Genre:</label>
              <input type="text" onChange={(e) => this.setState({genre: e.target.value})} />
            </div>
            <div className="field">
              <label>Author:</label>
              <select onChange={(e) => this.setState({authorId: e.target.value})}>
                <option>Select author</option>
                { this.displayAuthors() }
              </select>
            </div>
            <button>+</button>

          </form>
      );
  }
}

export default compose(
  graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"}),
)(AddBook);

