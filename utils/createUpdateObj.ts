import * as _ from 'lodash';

export const createUpdateObj = (data, newObj) => {
  const updateObj = {};

  _.mapKeys(newObj, (value, key) => {
    const oldValue = _.get(data, `recipe.${key}`);
    if (!_.isEqual(oldValue, value)) {
      updateObj[key] = value;
    }
  });

  return updateObj;
};
