/**
 * Check if any property of an object's value is empty
 *
 * @param {Object} - obj
 * @return {Boolean}
 */
export default function hasEmptyField(obj) {
  for (const key in obj) {
    if (!obj[key]) {
      return true
    }
  }
  return false
}
