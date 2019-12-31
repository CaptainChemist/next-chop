import getConfig from 'next/config';
import * as _ from 'lodash';
import { Upload, Button, Icon } from 'antd';

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
}: {
  handleSubmitImages: (images: any) => void;
}) => {
  const uploadProps = {
    name: 'file',
    action: file =>
      `${APIURL}?key=${APIKEY}&path=/${PROJECTID}-${BRANCH}/${file.name}`,
    data: file => ({ fileUpload: file }),
    onChange: async info => {
      if (info.file.status === 'done') {
        const { size, type, filename } = info.file.response;
        console.log(size, type, filename);
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
        };
        img.src = info.file.response.url;
      } else if (info.file.status === 'error') {
        console.log(info);
        console.log(info.file.name);
      }
    },
  };

  console.log(APIURL, APIKEY, PROJECTID, BRANCH, CDNBASE);
  return (
    <Upload {...uploadProps}>
      <Button>
        <Icon type="upload" /> Click to Upload
      </Button>
    </Upload>
  );
};
