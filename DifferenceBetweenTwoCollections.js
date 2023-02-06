/*
    Find the difference between two collections. 
    The difference means that either the character is present in one collection or it is present in other, but not in both. 
    Return a sorted list with the difference.
    The collections can contain any character and can contain duplicates.

    https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript
*/

function diff(a, b){
    //your code here
    let difference = a.filter(x => !b.includes(x));
    let difference1 = b.filter(x => !a.includes(x));
    if(a.length == 0 )
      return b;
    if(b.length == 0)
      return a;
    var result = difference.concat(difference1).sort();
    return [...new Set(result)];
  }