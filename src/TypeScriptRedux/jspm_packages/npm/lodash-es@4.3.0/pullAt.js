/* */ 
"format cjs";
import arrayMap from './_arrayMap';
import baseAt from './_baseAt';
import baseFlatten from './_baseFlatten';
import basePullAt from './_basePullAt';
import compareAscending from './_compareAscending';
import rest from './rest';

/**
 * Removes elements from `array` corresponding to `indexes` and returns an
 * array of removed elements.
 *
 * **Note:** Unlike `_.at`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [indexes] The indexes of elements to remove,
 *  specified individually or in arrays.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [5, 10, 15, 20];
 * var evens = _.pullAt(array, 1, 3);
 *
 * console.log(array);
 * // => [5, 15]
 *
 * console.log(evens);
 * // => [10, 20]
 */
var pullAt = rest(function(array, indexes) {
  indexes = arrayMap(baseFlatten(indexes), String);

  var result = baseAt(array, indexes);
  basePullAt(array, indexes.sort(compareAscending));
  return result;
});

export default pullAt;
