import * as _ from 'lodash';

export const verifyNotABannedMutation = async (req, res) => {
  const isBannedMutation = req.body.query.match(
    /deleteMany|updateMany|upsert/g,
  );

  if (!_.isNil(isBannedMutation)) {
    throw new Error('Invalid Mutation Requested');
  }
};
