import gql from 'graphql-tag';

export const deleteUserLikeGraphQL = gql`
  mutation deleteUserLikeGraphQL($where: UserLikeWhereUniqueInput!) {
    deleteUserLike(where: $where) {
      id
      user
    }
  }
`;
