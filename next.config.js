const withCSS = require('@zeit/next-css');
require('dotenv').config();

const {
  APIURL,
  APIKEY,
  PROJECTID,
  BRANCH,
  CDNBASE,
  GRAPHCMSID,
  GRAPHCMSURL,
} = process.env;

module.exports = withCSS({
  publicRuntimeConfig: {
    graphcms: {
      APIURL,
      APIKEY,
      PROJECTID,
      BRANCH,
      CDNBASE,
      GRAPHCMSID,
      GRAPHCMSURL,
    },
  },
});
