/*
    Create a function that takes in the sum and age difference of two people, calculates their individual ages, 
    and returns a pair of values (oldest age first)

    https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
*/

function getAges(sum,difference){
    if(sum < 0 || difference < 0)
      return null;
    let array = [];
    var a = (sum + difference )/2;
    var b = sum - a;
    array.push(a, b);
    if(a < 0 || b < 0)
        return null;
    return array;
  }