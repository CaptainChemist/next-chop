import { GraphQLClient } from 'graphql-request';

import getConfig from 'next/config';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const {
  graphcms: { GRAPHCMSURL, GRAPHCMSID },
} = serverRuntimeConfig;
const {
  graphcms: { BRANCH },
} = publicRuntimeConfig;

const graphqlEndpoint = `${GRAPHCMSURL}/${GRAPHCMSID}/${BRANCH}`;

export const graphQLClient = new GraphQLClient(graphqlEndpoint, {});

async function proxyGraphql(req, res) {
  try {
    console.log('in the proxy');
    const { variables, query } = req.body;
    console.log(variables, query);

    const data = await graphQLClient.rawRequest(query, variables);
    res.json(data);
  } catch (e) {
    res.json({ data: {}, errors: [{ message: e.message }] });
  }
}

export default proxyGraphql;
