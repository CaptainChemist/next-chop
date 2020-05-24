import gql from 'graphql-tag';

export const deleteRecipeGraphQL = gql`
  mutation($where: RecipeWhereUniqueInput!) {
    deleteRecipe(where: $where) {
      id
    }
  }
`;
