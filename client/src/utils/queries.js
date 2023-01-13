import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query getMe ($username: String!) {
    user (username: $username) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;

