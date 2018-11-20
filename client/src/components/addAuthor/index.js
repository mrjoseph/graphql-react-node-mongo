import { compose, graphql } from 'react-apollo';
import { addAuthorMutation, getAuthorsQuery } from '../../queries/queries';
import AddAuthor from './AddAuthor';
export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addAuthorMutation, {name: "addAuthorMutation"}),
)(AddAuthor);
