const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCSS({
  target: 'serverless',
  env: {
    APIURL: process.env.APIURL,
    APIKEY: process.env.APIKEY,
    PROJECTID: process.env.PROJECTID,
    BRANCH: process.env.BRANCH,
    CDNBASE: process.env.CDNBASE,
    BACKEND_URL: process.env.BACKEND_URL,
  },
});
