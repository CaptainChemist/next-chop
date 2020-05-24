import gql from 'graphql-tag';

export const userLikesGraphQL = gql`
  query($where: UserLikeWhereInput) {
    userLikes(where: $where) {
      id
      user
      recipe {
        id
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
