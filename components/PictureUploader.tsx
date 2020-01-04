import getConfig from 'next/config';
import * as _ from 'lodash';
import { Upload, Button, Icon } from 'antd';
import { Dispatch, SetStateAction } from 'react';

const { publicRuntimeConfig } = getConfig();
const {
  APIURL,
  APIKEY,
  PROJECTID,
  BRANCH,
  CDNBASE,
} = publicRuntimeConfig.graphcms;

export const PictureUploader = ({
  handleSubmitImages,
  setRecipeState,
}: {
  handleSubmitImages: (images: any) => void;
  setRecipeState: Dispatch<
    SetStateAction<{
      isQueryLoading: boolean;
      isPicUploading: boolean;
    }>
  >;
}) => {
  const uploadProps = {
    name: 'file',
    action: file =>
      `${APIURL}?key=${APIKEY}&path=/${PROJECTID}-${BRANCH}/${file.name}`,
    data: file => ({ fileUpload: file }),
    onChange: async info => {
      if (info.file.status === 'uploading') {
        setRecipeState(state => ({ ...state, isPicUploading: true }));
      }

      if (info.file.status === 'done') {
        const { size, type, filename } = info.file.response;
        // console.log(size, type, filename);
        var img = new Image();
        img.onload = function() {
          const height = _.get(this, 'naturalHeight');
          const width = _.get(this, 'naturalWidth');
          handleSubmitImages({
            create: {
              size,
              mimeType: type,
              fileName: filename,
              handle: _.get(info, 'file.response.url').replace(CDNBASE, ''),
              status: 'PUBLISHED',
              height,
              width,
            },
          });
          setRecipeState(state => ({ ...state, isPicUploading: false }));
        };
        img.src = info.file.response.url;
      } else if (info.file.status === 'error') {
        console.log(info);
        console.log(info.file.name);
        setRecipeState(state => ({ ...state, isPicUploading: false }));
      }
    },
  };

  return (
    <Upload {...uploadProps}>
      <Button>
        <Icon type="upload" /> Click to Upload
      </Button>
    </Upload>
  );
};
