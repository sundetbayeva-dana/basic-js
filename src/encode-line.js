const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str.length) return '';
  let prevLetter = '';
  let counter = 0
  let resStr = ''
  for (let i = 0; i <= str.length; i++) {

    if (prevLetter !== str[i]) {
      if (i !== 0) {
        const res = counter > 1 ? `${counter}${prevLetter}` : `${prevLetter}`
        resStr += res
      }
      counter = 1
    } else {
      counter += 1
    }
    prevLetter = str[i]
  }

  return resStr

}

module.exports = {
  encodeLine
};
