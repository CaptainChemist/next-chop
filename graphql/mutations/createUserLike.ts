import gql from 'graphql-tag';

export const createUserLikeGraphQL = gql`
  mutation createUserLikeGraphQL($data: UserLikeCreateInput!) {
    createUserLike(data: $data) {
      id
      user
      recipe {
        id
      }
    }
  }
`;
