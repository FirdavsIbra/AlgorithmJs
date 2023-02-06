/*
    Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.
    Write a function to help Leo out. 
    The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. 
    You should return an integer representing the maximum amount of gifts Leo can buy.

    https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript
*/

function howManyGifts(maxBudget, gifts){
  
    let sum = 0
    gifts = gifts.sort((a,b) => a-b);
    let count = 0;
    for(let i = 0; i < gifts.length; i++){
      sum += gifts[i]
      count ++;
      if(sum >= maxBudget){
        return count-1;
      }
    }
  }