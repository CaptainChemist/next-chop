# Next Chop

![Next Chop Logo](./public/favicon/apple-touch-icon.png)

## Frontend Serverless with React and GraphQL

In this repo we build a serverless recipe sharing application in React using Next.js. This is the code that we build in the [Frontend Serverless with React and GraphQL](https://courses.codemochi.com/frontend-serverless-with-react-and-graphql/) course at [Codemochi](https://codemochi.com).

### Overview

Check out the `staging` branch to see a step by step guide for building this application from the ground up. Each step is a commit which makes it easy to tell exactly what changed from step to step. The `master` branch has two commits- the initial commit which only has a README.md file, and a merge from the `staging` branch after we have built the whole application.

If you just want the finished product, you can clone this repo and the master branch will have the finished version if you pull the latest.

### How to use this Project

If you just want to run the app, check out the latest on the `master` branch and then create a `.env` file in the root of your file. It should have the following variables:

_.env_

```
GRAPHCMSID=your-graphcms-id
GRAPHCMSURL=https://api-yourregion.graphcms.com/v1
APIURL=https://www.filestackapi.com/api/store/S3
APIKEY=your-graphcms-api-key
PROJECTID=your-graphcms-projectid
BRANCH=master
CDNBASE=https://cdn.filestackcontent.com/
domain=your-domain.auth0.com
clientId=your-auth0-clientid
clientSecret=your-auth0-clientSecret
scope='openid profile'
redirectUri=https://localhost:3000/api/callback
postLogoutRedirectUri=https://localhost:3000/
cookieSecret='one-two-three-secret-four-secret-dont-share-it-ever'
BACKEND_URL=https://localhost:3000/api/graphql
GRAPHCMSTOKEN=your.graphcms.token
```

You can get these variables by creating an account with GraphCMS and Auth0 and we cover where to get those from and how they get loaded into this project by Next.js in steps 10 and 19, respectively.

You can start the app locally by running `npm start`.

To serverlessly deploy make sure that you have `now` and `dotenv-cli` installed globally and run `npm run secrets:add` followed by `now` in your command line. Be sure to update any of your urls from `localhost:3000` to the address of your actual website.

### Benefits

- Auth0 for User Authentication and Authorization
- Expressive data fetching with Apollo Hooks
- SEO Optimized with Next.js
- Beautiful GraphCMS backend
- Automatic code pipeline and deployment with Zeit Now

### Detailed list of steps that we go through

This application is complex, but in the [Frontend Serverless with React and GraphQL](https://courses.codemochi.com/frontend-serverless-with-react-and-graphql/) course we go through how to build this up over 10 hours of video so that you know where all of this code is coming from.

1. Create the Next.js Base
1. Add Styled Components
1. Add Ant Design
1. Add Main Layout
1. Add Global Style
1. Add MainHead Component
1. Add Layout
1. Add MainFooter
1. Add MainNavbar
1. Add GraphCMS
1. Add Apollo
1. Add GraphQL Request Files
1. Add GraphQLCodeGen
1. Add RecipesList
1. Add Alerts
1. Add RecipeListItem
1. Add Recipe Page
1. Add OneRecipe
1. Add Auth0
1. Add Auth0 Api
1. Add useFetchUser Hook
1. Add Login / Logout
1. Add My Recipes Page
1. Add Like Button
1. Add Favorites Page
1. Add Create Page
1. Add Create Recipe Form
1. Add Form Input
1. Add Form TextArea
1. Add Form Dropdown
1. Add Form Ingredient
1. Add Delete Ingredient Button
1. Uncontrolled vs. Controlled Components
1. Add Form Submit Mutation
1. Add Picture Uploader
1. Add Update Recipe Page
1. Add Update Recipe Form
1. Add Update Recipe Mutation
1. Update Recipe Image
1. Add Delete Recipe Button
1. Add Protected GraphQL Proxy
1. Lock down GraphCMS Endpoint
1. Add Check for Banned Mutations
1. Add User Verify Check
1. Add User Verify Permissions Check
1. Add Invalid User Redirect
1. Deploy Using Zeit Now

_Questions? Problems? Hit me up at @codemochi on twitter or open up an issue on this Github repo and I'll get to it ASAP!_
