'use strict';

//To mutate one string into another string one letter at a time, starting with the first letter first.

function capitalize(s,arr){
  //first split the word string so each letter in the string can be compared against a number in the array to see which should be capitalized
  let stringArray = s.split('');
  for (let i in arr) {
    //make sure that the array number isn't greater than the number of letters in the string array
    if (arr[i] < stringArray.length) {
      stringArray[arr[i]] = stringArray[arr[i]].toUpperCase();
    }
  }
  return stringArray.join('');
}
