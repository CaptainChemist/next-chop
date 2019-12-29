import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import * as _ from 'lodash';
import { recipesGraphQL } from '../graphql/queries/recipes';
import { userLikesGraphQL } from '../graphql/queries/userLikes';
import { Row } from 'antd';
import { Recipe } from '../generated/apollo-components';

export enum queryEnum {
  userLikes = 'userLikes',
  recipes = 'recipes',
}

type RecipesListProps = {
  options?: QueryHookOptions;
  parentRoute: string;
  queryType: queryEnum;
};

export const RecipesList = ({
  options,
  parentRoute,
  queryType,
}: RecipesListProps) => {
  const query =
    queryType === queryEnum.recipes ? recipesGraphQL : userLikesGraphQL;
  const { loading, data, error } = useQuery(query, options);

  const parentArray = _.get(data, queryType);
  const recipesList = _.map(parentArray, value =>
    _.get(value, 'recipe', value),
  );

  if (loading) return <p>Loading</p>;
  if (error || !recipesList) return <p>Error</p>;
  if (recipesList.length === 0) return <p>Warning</p>;

  return (
    <Row>
      {recipesList.map((recipe: Recipe) => (
        <p key={recipe.id}>{recipe.title}</p>
      ))}
    </Row>
  );
};
