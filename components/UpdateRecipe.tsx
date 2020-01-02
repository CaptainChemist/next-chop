import { useQuery, useMutation } from '@apollo/react-hooks';
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
import { createUpdateObj } from '../utils/createUpdateObj';
import { updateRecipeGraphQL } from '../graphql/mutations/updateRecipe';

export const UpdateRecipe = ({ id }) => {
  const { loading: isQueryLoading, data, error } = useQuery(recipeGraphQL, {
    variables: { where: { id } },
  });
  const [updateRecipeMutation, { loading: updateRecipeLoading }] = useMutation(
    updateRecipeGraphQL,
  );

  const [recipeState, setRecipeState] = useState({ isQueryLoading });

  console.log(isQueryLoading, data, error);

  const initiateUpdateRecipe = () => {
    console.log('submitted update');
    const updateObj = createUpdateObj(data, inputs);
    console.log(updateObj);
    return updateRecipeMutation({
      refetchQueries: [{ query: recipeGraphQL, variables: { where: { id } } }],
      variables: {
        data: {
          ...updateObj,
        },
        where: { id },
      },
    });
  };

  const {
    inputs,
    setInputs,
    handleInputChange,
    handleDropdownChange,
    handleAddIngredient,
    handleDeleteIngredient,
    handleSubmitImages,
    handleUpdate,
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
    <Form onSubmit={handleUpdate}>
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
