import { gql } from 'apollo-boost';
export const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

export const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

export const addBookMutation = gql`
  mutation($name: String!,$genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name,
      id
    }
  }
`;

export const addAuthorMutation = gql`
  mutation($name: String!,$age: Int!){
    addAuthor(name: $name, age: $age){
      name,
      id
    }
  }
`;
export const deleteBookMutation = gql `
  mutation($id: ID){
     deleteBook(id: $id) {
       id
     }
  }
`;


export const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

export const showTypeMutation = gql`
  mutation showTypeMutation($show_type: String!) {
    changeShowType(show_type: $show_type) @client {
      show_type
    }
  }
`;

