'use strict';

//To mutate one string into another string one letter at a time, starting with the first letter first.

function mutateMyStrings(stringOne, stringTwo){

  //build a final string that adds a \n with concatenation with each loop, to give the returns expected as in the test
  let mutatedString = stringOne + '\n';

  let trimString = stringOne.split('');

  //for loop with first string replacing one element at a time from string two into string one
  for (let i in stringTwo){

    // account for potential of the two letters being the same and only change the letters if they are different (!==/not equal)
    if(trimString[i] !== stringTwo.charAt(i)) {

      trimString[i] = stringTwo.charAt(i);
      mutatedString += trimString.join('') + '\n';
    }
  }
  return mutatedString;
}