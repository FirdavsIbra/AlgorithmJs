/*
    Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
    the array can't be empty
    only non-negative, single digit integers are allowed
    Return nil (or your language's equivalent) for invalid inputs.

    https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript
*/
function upArray(arr) {
    if (!arr.length || arr.some(num => num < 0 || num > 9)) {
      return null;
    }
    let carry = 1;
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      let sum = arr[i] + carry;
      result.unshift(sum % 10);
      carry = Math.floor(sum / 10);
    }
    if (carry === 1) {
    result.unshift(1);
    }
      return result;
  }