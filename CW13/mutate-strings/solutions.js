'use strict';

//To mutate one string into another string one letter at a time, starting with the first letter first.

function mutateMyStrings(stringOne, stringTwo){

  //for loop with first string replacing one element at a time from string two into string one

  for (let i in stringOne){
    let trimString = stringOne[i].remove();
    let returnString = stringTwo[i].replace('z');
    console.log(returnString);

    let mutatedString = returnString + stringOne + '\n';

    console.log(mutatedString);
  }
  //return the string with each loop adding a \n with concatenation to give the returns expected as in the test



}

