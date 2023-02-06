/*
    You are going to be given an array of integers. 
    Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
    If there is no index that would make this happen, return -1.

    https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
*/

function findEvenIndex(arr)
{
  for (let i = arr.length - 1; i >= 0; i--) {
    let leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
    let rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}