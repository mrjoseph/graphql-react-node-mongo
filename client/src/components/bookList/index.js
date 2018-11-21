import { compose, graphql } from 'react-apollo';
import { deleteBookMutation, getBooksQuery, showTypeMutation } from '../../queries/queries';
import BookList from './BookList';
export default compose(
    graphql(getBooksQuery, {name: "getBooksQuery"}),
    graphql(deleteBookMutation, {name: "deleteBookMutation"}),
    graphql(showTypeMutation)
)(BookList);
