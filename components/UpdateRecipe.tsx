import { useQuery } from '@apollo/react-hooks';
import * as _ from 'lodash';
import { recipeGraphQL } from '../graphql/queries/recipe';
import { submitForm } from '../utils/submitForm';
import { useState } from 'react';
import { Form, Row, Col, Button } from 'antd';
import {
  GenerateInput,
  GenerateTextInput,
  GenerateDropdown,
} from './GenerateFields';
import { GenerateIngredients } from './GenerateIngredients';
import { Loading } from './notify/Loading';

export const UpdateRecipe = ({ id }) => {
  const { loading: isQueryLoading, data, error } = useQuery(recipeGraphQL, {
    variables: { where: { id } },
  });

  const [recipeState, setRecipeState] = useState({ isQueryLoading });

  console.log(isQueryLoading, data, error);

  const initiateUpdateRecipe = () => {};

  const {
    inputs,
    setInputs,
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
    initiateUpdateRecipe,
  );

  if (!isQueryLoading && recipeState.isQueryLoading) {
    const { __typename, ...loadedRecipe } = _.get(data, 'recipe', {});
    setInputs(state => ({ ...state, ...loadedRecipe }));
    setRecipeState(state => ({ ...state, isQueryLoading }));
  }
  console.log(inputs, recipeState);

  if (!data) return <Loading />;

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
            {/* <PictureUploader handleSubmitImages={handleSubmitImages} /> */}
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Action">
            <Button disabled={isQueryLoading} type="primary" htmlType="submit">
              Update Recipe
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
