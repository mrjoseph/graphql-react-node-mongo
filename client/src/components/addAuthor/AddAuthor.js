import React, { Component } from 'react';
import { getAuthorsQuery } from '../../queries/queries';

class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { addAuthorMutation } = this.props;
    const { name, age } = this.state;
    addAuthorMutation(
      { variables:
        { name,
          age: parseFloat(age),

        },
        refetchQueries: [{ query: getAuthorsQuery }]
      },
    );
  }
  render(){
      return(
          <form id="add-book" onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Author name:</label>
              <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
            </div>
            <div className="field">
              <label>Age:</label>
              <input type="text" onChange={(e) => this.setState({age: e.target.value})} />
            </div>
            <button>Add author</button>
          </form>
      );
  }
}
export default AddAuthor;

