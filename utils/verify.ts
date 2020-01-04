import * as _ from 'lodash';
import { getUserObject } from './getUserObject';
import auth0 from './auth0';

export const verifyNotABannedMutation = async (req, res) => {
  const isBannedMutation = req.body.query.match(
    /deleteMany|updateMany|upsert/g,
  );

  if (!_.isNil(isBannedMutation)) {
    throw new Error('Invalid Mutation Requested');
  }
};

export const verifyUserMatches = async (req, res) => {
  const requestedUserId: string = getUserObject(req.body.variables);

  if (!_.isNil(requestedUserId)) {
    const { user } = await auth0.getSession(req);

    const actualUserId: string = _.get(user, 'sub');
    if (actualUserId !== requestedUserId) {
      throw new Error('Invalid User Requested');
    }
  }
};
