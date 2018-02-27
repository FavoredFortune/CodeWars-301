'use strict';

//This codewar challenge was to deliver a sum of an array of odd numbers that have been cubed from an array that doesn't contain strings.

function cubeOdd(arr) {
  //filter original array and make sure it doesn't have a string, give array new variable name
  if (arr.some(x => typeof x !== 'number')){
    return undefined;
  }
  //transform every element in the second (goodArray) into a cube of itself
  let sumArray = arr.filter(x => x%2 !== 0).map(x => x*x*x).reduce((accumulator, currentValue) =>
  { return accumulator + currentValue;
  },0 //sets initial value at zero
  );
  return sumArray;
}

