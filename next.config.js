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
  domain,
  clientId,
  clientSecret,
  scope,
  redirectUri,
  postLogoutRedirectUri,
  cookieSecret,
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
  serverRuntimeConfig: {
    auth: {
      domain,
      clientId,
      clientSecret,
      scope,
      redirectUri,
      postLogoutRedirectUri,
    },
    cookieSecret,
  },
});
