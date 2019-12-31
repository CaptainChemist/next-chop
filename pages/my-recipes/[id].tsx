import { MainLayout } from '../../components/layout/MainLayout';

const MyRecipe = ({ id }) => (
  <MainLayout title="Update Recipe">
    <h1>Update Recipe</h1>
  </MainLayout>
);

MyRecipe.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default MyRecipe;
