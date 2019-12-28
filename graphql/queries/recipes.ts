import gql from 'graphql-tag';

export const recipesGraphQL = gql`
  query recipesGraphQL($where: RecipeWhereInput) {
    recipes(where: $where) {
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
`;
