import { GraphQLClient } from 'graphql-request';

import {
  verifyNotABannedMutation,
  verifyUserMatches,
  verifyUserPermissions,
} from '../../utils/verify';

const graphqlEndpoint = `${process.env.GRAPHCMSURL}/${process.env.GRAPHCMSID}/${process.env.BRANCH}`;

export const graphQLClient = new GraphQLClient(graphqlEndpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMSTOKEN}`,
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
