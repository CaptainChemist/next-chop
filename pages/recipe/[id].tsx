import { recipeGraphQL } from '../../graphql/queries/recipe';
import { useQuery } from '@apollo/react-hooks';
import * as _ from 'lodash';
import { Loading } from '../../components/notify/Loading';
import { Error } from '../../components/notify/Error';
import { MainLayout } from '../../components/layout/MainLayout';
import { OneRecipe } from '../../components/OneRecipe';

const Recipe = ({ id }) => {
  const { loading, data, error } = useQuery(recipeGraphQL, {
    variables: { where: { id } },
  });
  const title = _.get(data, 'recipe.title');

  if (loading)
    return (
      <MainLayout title="Recipe Loading">
        <Loading />
      </MainLayout>
    );

  if (error)
    return (
      <MainLayout title="Recipe Loading Error">
        <Error errorText={`${error}`} />
      </MainLayout>
    );

  if (!title)
    return (
      <MainLayout title="Not a valid recipe">
        <Error errorText="Not a valid recipe" />
      </MainLayout>
    );

  return (
    <MainLayout title={title}>
      <OneRecipe recipe={data.recipe} />
    </MainLayout>
  );
};

Recipe.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default Recipe;
