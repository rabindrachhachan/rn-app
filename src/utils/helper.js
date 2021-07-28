import _ from 'lodash';

/**
 * Prefix
 */
const PREFIX = [
  'a.',
  'b.',
  'c.',
  'd.',
  'e.',
  'f.',
  'g.',
  'h.',
  'i.',
  'j.',
  'k.',
  'l.',
  'm.',
  'n.',
  'o.',
  'p.',
  'q.',
  'r.',
  's.',
  't.',
  'u.',
  'v.',
  'w.',
  'x.',
  'y.',
  'z.',
];

/**
 * method to construct nested data with parent-child relationship
 */
export const formatData = data => {
  let mData = [];

  let parentPrefix = 0;
  _.forEach(data, (mItem, index) => {
    let pObject = {};
    let childPrefix = -1;
    if (mItem.parent_objective_id == '') {
      parentPrefix = parentPrefix + 1;

      pObject = {
        ...mItem,
        prefix: `${parentPrefix}.`,
        expand: true,
        showTogle: true,
      };
      let filters = [];

      _.forEach(data, (dItem, index) => {
        if (mItem.id === dItem.parent_objective_id) {
          childPrefix = childPrefix + 1;
          dItem.prefix = PREFIX[childPrefix];
          filters.push(dItem);
        }
      });
      pObject.data = filters;
      mData.push(pObject);
    }
  });
  return mData;
};

/**
 * method to get all uniq category
 */
export const getCategory = data => {
  let categories = [];
  categories = _.map(data, (mItem, index) => ({
    label: mItem.category,
    id: index,
  }));
  categories = _.uniqBy(categories, 'label');
  return categories;
};
