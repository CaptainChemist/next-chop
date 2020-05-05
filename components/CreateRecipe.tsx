import { Form, Row, Col, Button } from 'antd';
import * as _ from 'lodash';
import { submitForm } from '../utils/submitForm';
import { GenerateInput, GenerateTextInput } from './GenerateFields';
import { GenerateIngredients } from './GenerateIngredients';
import { useFetchUser } from '../utils/user';
import { useMutation } from '@apollo/react-hooks';
import { createRecipeGraphQL } from '../graphql/mutations/createRecipe';
import { recipesGraphQL } from '../graphql/queries/recipes';
import { Loading } from './notify/Loading';
import { PictureUploader } from './PictureUploader';
import { useState } from 'react';
import Router from 'next/router';

export const CreateRecipe = () => {
  const [createRecipeMutation, { loading }] = useMutation(createRecipeGraphQL);
  const { user, loading: isFetchingUser } = useFetchUser();
  const [recipeState, setRecipeState] = useState({
    isPicUploading: false,
  });
  const owner = _.get(user, 'sub') || '';

  const initiateCreateRecipe = () => {
    createRecipeMutation({
      refetchQueries: [
        { query: recipesGraphQL },
        { query: recipesGraphQL, variables: { where: { owner } } },
      ],
      variables: {
        data: {
          ...inputs,
          owner,
        },
      },
    });
    Router.replace('/my-recipes');
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
        <Col offset={10} span={4}>
          <Form.Item label="Upload Image">
            <PictureUploader
              handleSubmitImages={handleSubmitImages}
              setRecipeState={setRecipeState}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Create Recipe">
            <Button
              disabled={loading || recipeState.isPicUploading}
              type="primary"
              htmlType="submit"
            >
              Create Recipe
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
