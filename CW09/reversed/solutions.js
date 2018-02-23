'use strict';

//This codewar challenge was to return a reverse string without using the reverse method.

function solution(str){
  //create an array to hold the newly reveresed string
  let reverseArray = [];
  //split the original string
  str.split();
  // for each item in the string take the last item and put it in the first and then next indicies in the new array defined above
  for (i in str){
    reverseArray.unshift(str[i]);
  }
  //return the string rejoined within the array in reverse order
  return reverseArray.join('');
}