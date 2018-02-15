'use strict';

//Today's codewar challenge was to insert dashes between odd numbers in a string. So far, I've failed.

function insertDash(num) {

  let numArray = String(num).split('');
  console.log(numArray);
  for (var i in numArray){
    if ((numArray[i]%2 === 1) && (numArray[i-1]%2 === 1)){
      return numArray.splice([i], 0, '-');
    }
  }
  return numArray;
}
