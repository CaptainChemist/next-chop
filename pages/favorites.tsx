import { MainLayout } from '../components/layout/MainLayout';
import { RecipesList, queryEnum } from '../components/RecipeList';
import styled from 'styled-components';
import * as _ from 'lodash';
import { useFetchUser } from '../utils/user';
import { Loading } from '../components/notify/Loading';
import Router from 'next/router';

const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme['padding-small']} ${theme['padding-small']};
  `}
`;

const Favorites = () => {
  const { user, loading: isFetchUser } = useFetchUser();
  const owner = _.get(user, 'sub');
  const options = owner ? { variables: { where: { user: owner } } } : {};

  if (isFetchUser) return <Loading />;
  if (!user) {
    Router.replace('/');
  }

  return (
    <MainLayout title="Recipes">
      <StyledHeader>My Favorites</StyledHeader>
      <RecipesList
        parentRoute="recipe"
        queryType={queryEnum.userLikes}
        options={options}
      />
    </MainLayout>
  );
};

export default Favorites;
