const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const mainStr = typeof(str) !== 'string' ? `${str}` : str
  let resStr = ''
  const mainRepeatTimes = options.repeatTimes || 1
  const additionRepeatTimes = options.additionRepeatTimes || 1
  let additionStr = false

  if (options.addition || options.addition === false || options.addition === null ) {
    additionStr = typeof(options.addition) !== 'string' ? `${options.addition}` : options.addition
  }

  for (let i = 0; i < mainRepeatTimes; i++) {
    resStr += mainStr

    if (additionRepeatTimes > 0 && additionStr) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        resStr += additionStr
        if (additionRepeatTimes > 1 && (j !== additionRepeatTimes - 1)) {
          resStr += options.additionSeparator || '|'
        }
      }
    }
    if(i !== mainRepeatTimes - 1) resStr += options.separator || '+'
  }

  return resStr

}

module.exports = {
  repeater
};
