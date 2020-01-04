import styled from 'styled-components';
import { MainLayout } from '../components/layout/MainLayout';
import { RecipesList, queryEnum } from '../components/RecipeList';
import { Status } from '../generated/apollo-components';

const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme['padding-small']} ${theme['padding-small']};
  `}
`;

const Index = () => {
  const options = { variables: { where: { status: Status.Published } } };
  return (
    <MainLayout title="Recipes">
      <StyledHeader>Index Page</StyledHeader>
      <RecipesList
        parentRoute="recipe"
        queryType={queryEnum.recipes}
        options={options}
      />
    </MainLayout>
  );
};

export default Index;
