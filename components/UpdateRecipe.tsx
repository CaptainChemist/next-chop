import { useQuery, useMutation } from '@apollo/react-hooks';
import * as _ from 'lodash';
import Router from 'next/router';
import { recipeGraphQL } from '../graphql/queries/recipe';
import { submitForm } from '../utils/submitForm';
import { useState } from 'react';
import { Form, Row, Col, Button } from 'antd';
import GraphImg from 'graphcms-image';
import { GenerateInput, GenerateTextInput } from './GenerateFields';
import { GenerateIngredients } from './GenerateIngredients';
import { Loading } from './notify/Loading';
import { createUpdateObj } from '../utils/createUpdateObj';
import { updateRecipeGraphQL } from '../graphql/mutations/updateRecipe';
import { PictureUploader } from './PictureUploader';
import { deleteAssetGraphQL } from '../graphql/mutations/deleteAsset';
import { DeleteButton } from './DeleteButton';
import { useFetchUser } from '../utils/user';

export const UpdateRecipe = ({ id }) => {
  const { user, loading: isFetchUser } = useFetchUser();

  const { loading: isQueryLoading, data, error } = useQuery(recipeGraphQL, {
    variables: { where: { id } },
  });
  const [updateRecipeMutation, { loading: updateRecipeLoading }] = useMutation(
    updateRecipeGraphQL,
  );
  const [deleteAssetMutation, { loading: deleteAssetLoading }] = useMutation(
    deleteAssetGraphQL,
  );

  const [recipeState, setRecipeState] = useState({
    isQueryLoading,
    isPicUploading: false,
  });

  const initiateUpdateRecipe = async () => {
    const queryImagesHandle = _.get(data, 'recipe.images.handle');
    const queryImagesId = _.get(data, 'recipe.images.id');
    const inputsImagesHandle = _.get(inputs, 'images.create.handle');
    if (
      queryImagesHandle !== inputsImagesHandle &&
      !_.isNil(inputsImagesHandle)
    ) {
      await deleteAssetMutation({
        variables: {
          where: {
            id: queryImagesId,
          },
        },
      });
    }
    const updateObj = createUpdateObj(data, inputs);
    if (!_.isEmpty(updateObj)) {
      const result = await updateRecipeMutation({
        refetchQueries: [
          { query: recipeGraphQL, variables: { where: { id } } },
        ],
        variables: {
          data: {
            ...updateObj,
          },
          where: { id },
        },
      });
      const updateRecipe = _.get(result, 'data.updateRecipe');
      return updateRecipe;
    } else {
      const recipe = _.get(data, 'recipe');
      return recipe;
    }
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
      ingredients: [],
    },
    initiateUpdateRecipe,
  );

  if (!isQueryLoading && recipeState.isQueryLoading) {
    const { __typename, ...loadedRecipe } = _.get(data, 'recipe', {});
    setInputs(state => ({ ...state, ...loadedRecipe }));
    setRecipeState(state => ({ ...state, isQueryLoading }));
  }

  if (!data || isFetchUser) return <Loading />;
  const owner = _.get(user, 'sub') || '';
  const recipeOwner = _.get(data, 'recipe.owner') || '';
  if (!user || owner !== recipeOwner) {
    Router.push('/');
  }

  const disabled =
    isQueryLoading ||
    updateRecipeLoading ||
    deleteAssetLoading ||
    recipeState.isPicUploading;

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
        <Col offset={10} span={4}>
          <Form.Item label="Upload Image">
            {inputs.images ? <GraphImg image={inputs.images} /> : null}
            <PictureUploader
              setRecipeState={setRecipeState}
              handleSubmitImages={handleSubmitImages}
            />
          </Form.Item>
        </Col>
        <Col span={3} offset={1}>
          <Form.Item label="Action">
            <Button block disabled={disabled} type="primary" htmlType="submit">
              Update Recipe
            </Button>
            <DeleteButton
              id={id}
              imageId={_.get(inputs, 'images.id')}
              disabled={disabled}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
