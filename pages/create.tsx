import { MainLayout } from '../components/layout/MainLayout';
import styled from 'styled-components';
import { CreateRecipe } from '../components/CreateRecipe';

const StyledHeader = styled.h1`
  ${({ theme }) => `
        padding: ${theme['padding-small']} ${theme['padding-small']};
    `}
`;

const Create = () => {
  return (
    <MainLayout title="Create Recipe">
      <StyledHeader>Create Recipe</StyledHeader>
      <CreateRecipe />
    </MainLayout>
  );
};

export default Create;
