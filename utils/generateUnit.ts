import pluralize from 'pluralize';

export const generateUnit = (unit, amount) => {
  if (unit !== '-') {
    return pluralize(unit, parseInt(amount));
  } else {
    return '';
  }
};
