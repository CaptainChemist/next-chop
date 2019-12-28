import gql from 'graphql-tag';

export const userLikesGraphQL = gql`
  query userLikesGraphQL($where: UserLikeWhereInput) {
    userLikes(where: $where) {
      id
      user
      recipe {
        id
        status
        title
        content
        description
        ingredients
        userLikes {
          id
          user
        }
        owner
        images {
          id
          fileName
          height
          width
          size
          handle
        }
      }
    }
  }
`;
