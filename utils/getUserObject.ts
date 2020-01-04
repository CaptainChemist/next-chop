import * as _ from 'lodash';

export const getUserObject = currentItem => {
  let result = null;

  if (_.isArray(currentItem)) {
    for (const item of currentItem) {
      result = getUserObject(item);
      if (result) {
        break;
      }
    }
  } else {
    for (const prop in currentItem) {
      if (prop === 'user') {
        return currentItem.user;
      } else if (prop === 'owner') {
        return currentItem.owner;
      }

      if (_.isObject(currentItem[prop]) || _.isArray(currentItem[prop])) {
        result = getUserObject(currentItem[prop]);
        if (result) {
          break;
        }
      }
    }
  }
  return result;
};
