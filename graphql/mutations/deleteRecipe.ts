import gql from 'graphql-tag';

export const deleteRecipeGraphQL = gql`
  mutation deleteRecipeGraphQL($where: RecipeWhereUniqueInput!) {
    deleteRecipe(where: $where) {
      id
    }
  }
`;
