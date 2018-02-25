'use strict';

//Today's codewar challenge was to insert dashes between odd numbers in a string.

function insertDash(num) {

  //I was using this method incorrectly before this method converts a number to string
  let numArray = num.toString();

  //This method splits a string into a string of substrings to allow insertion of dahses where needed. I didn't know about this earlier and heard some students talking about it recently so I researched it and thought I could use it here.
  numArray = numArray.split('');

  //Ran a loop to test each string element of the array to see if it's even or odd and then use .splice method to insert a dash where needed. Doublechecked my use of the .splice method.

  for (var i = 0; i < numArray.length; i++){
    if ((numArray[i]%2 === 1) && (numArray[i+1]%2 === 1)){
      numArray.splice([i+1], 0, '-');
      i++;
    }
  }

  //The .join method returns the array of strings (and inserted elements) back into a string.
  return numArray.join('');
}

