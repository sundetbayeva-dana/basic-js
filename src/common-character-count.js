const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  arr2.sort((a, b) => a > b ? 1 : -1);
  for (let i = 0; i < arr2.length; i += 1) {
    if (arr2[i].includes(arr1[i])) {
      res += 1
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
