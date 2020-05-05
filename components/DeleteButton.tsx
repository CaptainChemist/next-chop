import { Button, Modal } from 'antd';
import { Fragment, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { deleteRecipeGraphQL } from '../graphql/mutations/deleteRecipe';
import { deleteAssetGraphQL } from '../graphql/mutations/deleteAsset';
import Router from 'next/router';

export const DeleteButton = ({
  id,
  imageId,
  disabled,
}: {
  id: string;
  imageId: string;
  disabled: boolean;
}) => {
  const [deleteRecipeMutation, { loading: deleteRecipeLoading }] = useMutation(
    deleteRecipeGraphQL,
  );
  const [deleteAssetMutation, { loading: deleteAssetLoading }] = useMutation(
    deleteAssetGraphQL,
  );
  const [isModalVisible, setModalVisibility] = useState(false);

  const handleOk = async () => {
    if (imageId && !deleteAssetLoading) {
      await deleteAssetMutation({
        variables: {
          where: { id: imageId },
        },
      });
    }

    if (!deleteRecipeLoading) {
      await deleteRecipeMutation({
        variables: {
          where: { id },
        },
      });
    }

    setModalVisibility(false);
    Router.replace('/my-recipes');
  };

  const handleShow = () => setModalVisibility(true);
  const handleHide = () => setModalVisibility(false);
  return (
    <Fragment>
      <Button
        block
        type="danger"
        disabled={disabled || deleteRecipeLoading || deleteAssetLoading}
        onClick={handleShow}
      >
        Delete Recipe
      </Button>
      <Modal
        title="Confirm Delete"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleHide}
      >
        <p>Are you sure that you want to delete this recipe?</p>
      </Modal>
    </Fragment>
  );
};
