/**
 * Check if any property of an object's value is empty
 *
 * @param {Object} - obj
 * @return {Boolean}
 */
export default function hasEmptyField(obj) {
  if (typeof obj !== 'object') {
    throw new TypeError(`Expected an object but got ${typeof obj}`)
  }
  for (const key in obj) {
    if (!obj[key]) {
      return true
    }
  }
  return false
}
