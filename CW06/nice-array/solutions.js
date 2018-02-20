'use strict';

//This codewar challenge was to validate if an array's elements all have a value that is + or - 1 of another element and if that is true for each of the elements return true otherwise return false (including for an empty array)


function isNice(arr) {
  //this returns false if the array is empty  - doing this first helps simplify the subsequent logic tests in the for loop after

  if (arr.length === 0){
    return false;
  }

  // this tests for the rest of the requirements to see a "Nice" array - that any element in the array equals the value of that element plus or minus one
  else{
    for(var i in arr){
      if((arr.includes((arr[i]+1)))||(arr.includes(arr[i]-1))){
        continue;
      } else {
        return false;
      }
      
    //once the for loop is completed, if not stopped by a false value in the if test within the for loop, the array is "Nice" and the function can return true
    }return true;
  }
}