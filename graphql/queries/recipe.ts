import gql from 'graphql-tag';

export const recipeGraphQL = gql`
  query($where: RecipeWhereUniqueInput!) {
    recipe(where: $where) {
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
`;
