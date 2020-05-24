import gql from 'graphql-tag';

export const createUserLikeGraphQL = gql`
  mutation($data: UserLikeCreateInput!) {
    createUserLike(data: $data) {
      id
      user
      recipe {
        id
      }
    }
  }
`;
