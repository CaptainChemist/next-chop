import { Form, Row, Col, Button } from 'antd';
import * as _ from 'lodash';
import { submitForm } from '../utils/submitForm';
import {
  GenerateInput,
  GenerateTextInput,
  GenerateDropdown,
} from './GenerateFields';
import { GenerateIngredients } from './GenerateIngredients';
import { useFetchUser } from '../utils/user';
import { useMutation } from '@apollo/react-hooks';
import { createRecipeGraphQL } from '../graphql/mutations/createRecipe';
import { recipesGraphQL } from '../graphql/queries/recipes';
import { Loading } from './notify/Loading';
import { PictureUploader } from './PictureUploader';

export const CreateRecipe = () => {
  const [createRecipeMutation, { loading }] = useMutation(createRecipeGraphQL);
  const { user, loading: isFetchingUser } = useFetchUser();
  const owner = _.get(user, 'sub') || '';

  const initiateCreateRecipe = () => {
    createRecipeMutation({
      refetchQueries: [{ query: recipesGraphQL }],
      variables: {
        data: {
          ...inputs,
          owner,
        },
      },
    });
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleAddIngredient,
    handleDeleteIngredient,
    handleSubmitImages,
    handleSubmit,
  } = submitForm(
    {
      title: '',
      description: '',
      content: '',
      status: 'DRAFT',
      ingredients: [],
    },
    initiateCreateRecipe,
  );

  if (isFetchingUser) return <Loading />;

  return (
    <Form onSubmit={handleSubmit}>
      <GenerateInput
        name="title"
        value={inputs.title}
        handleInputChange={handleInputChange}
      />
      <GenerateInput
        name="description"
        value={inputs.description}
        handleInputChange={handleInputChange}
      />
      <GenerateTextInput
        name="content"
        value={inputs.content}
        handleInputChange={handleInputChange}
      />
      <GenerateIngredients
        names={['amount', 'unit', 'type']}
        values={inputs.ingredients}
        handleAddIngredient={handleAddIngredient}
        handleDeleteIngredient={handleDeleteIngredient}
        handleDropdownChange={handleDropdownChange}
        handleInputChange={handleInputChange}
      />
      <Row>
        <GenerateDropdown
          name="status"
          value={inputs.status}
          handleDropdownChange={handleDropdownChange}
        />
        <Col span={4}>
          <Form.Item label="Upload Image">
            <PictureUploader handleSubmitImages={handleSubmitImages} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Create Recipe">
            <Button disabled={loading} type="primary" htmlType="submit">
              Create Recipe
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
