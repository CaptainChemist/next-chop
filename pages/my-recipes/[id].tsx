import { MainLayout } from '../../components/layout/MainLayout';
import { UpdateRecipe } from '../../components/UpdateRecipe';

const MyRecipe = ({ id }) => (
  <MainLayout title="Update Recipe">
    <h1>Update Recipe</h1>
    <UpdateRecipe id={id} />
  </MainLayout>
);

MyRecipe.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default MyRecipe;
