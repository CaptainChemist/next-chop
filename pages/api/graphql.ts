import { GraphQLClient } from 'graphql-request';

import getConfig from 'next/config';
import {
  verifyNotABannedMutation,
  verifyUserMatches,
  verifyUserPermissions,
} from '../../utils/verify';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const {
  graphcms: { GRAPHCMSURL, GRAPHCMSID, GRAPHCMSTOKEN },
} = serverRuntimeConfig;
const {
  graphcms: { BRANCH },
} = publicRuntimeConfig;

const graphqlEndpoint = `${GRAPHCMSURL}/${GRAPHCMSID}/${BRANCH}`;

export const graphQLClient = new GraphQLClient(graphqlEndpoint, {
  headers: {
    authorization: `Bearer ${GRAPHCMSTOKEN}`,
  },
});

async function proxyGraphql(req, res) {
  try {
    await verifyNotABannedMutation(req, res);
    await verifyUserMatches(req, res);
    await verifyUserPermissions(req, res);

    const { variables, query } = req.body;

    const data = await graphQLClient.rawRequest(query, variables);
    res.json(data);
  } catch (e) {
    res.json({ data: {}, errors: [{ message: e.message }] });
  }
}

export default proxyGraphql;
