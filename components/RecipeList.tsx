import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import * as _ from 'lodash';
import { recipesGraphQL } from '../graphql/queries/recipes';
import { userLikesGraphQL } from '../graphql/queries/userLikes';
import { Row } from 'antd';
import { Recipe } from '../generated/apollo-components';
import { Error } from './notify/Error';
import { Loading } from './notify/Loading';
import { Warning } from './notify/Warning';
import { RecipeListItem } from './RecipesListItem';

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

  if (loading) return <Loading />;
  if (error || !recipesList) return <Error errorText={`${error}`} />;
  if (recipesList.length === 0)
    return (
      <Warning
        warningHeader="No Recipes"
        warningText="No recipes are present. Why not add one?"
      />
    );

  return (
    <Row>
      {recipesList.map((recipe: Recipe) => (
        <RecipeListItem
          recipe={recipe}
          key={`${recipe.id}-${queryType}`}
          parentRoute={parentRoute}
        />
      ))}
    </Row>
  );
};
