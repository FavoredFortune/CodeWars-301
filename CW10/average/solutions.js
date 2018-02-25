'use strict';

//This codewar challenge was to return the average value of an array.

function find_average(array) {

  //This reduce method creates a total of the array values which can then be divided by the length of the array to return an average
  let avgCalc = array.reduce(
    (accumulator,currentValue) =>
      accumulator + currentValue,0);
  return avgCalc/array.length;
}