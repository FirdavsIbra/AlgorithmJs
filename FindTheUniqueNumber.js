/*
    here is an array with some numbers. All numbers are equal except for one. Try to find it!

    https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
*/
function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}