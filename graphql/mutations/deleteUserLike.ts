import gql from 'graphql-tag';

export const deleteUserLikeGraphQL = gql`
  mutation($where: UserLikeWhereUniqueInput!) {
    deleteUserLike(where: $where) {
      id
      user
    }
  }
`;
