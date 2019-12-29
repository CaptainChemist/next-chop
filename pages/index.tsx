import styled from 'styled-components';
import { MainLayout } from '../components/layout/MainLayout';
import { RecipesList, queryEnum } from '../components/RecipeList';

const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme['padding-small']} ${theme['padding-small']};
  `}
`;

const Index = () => {
  return (
    <MainLayout title="Recipes">
      <StyledHeader>Index Page</StyledHeader>
      <RecipesList parentRoute="recipe" queryType={queryEnum.recipes} />
    </MainLayout>
  );
};

export default Index;
