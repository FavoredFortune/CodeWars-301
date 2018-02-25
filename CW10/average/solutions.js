'use strict';

//This codewar challenge was to return a string from an array with commas between each value but the last one, which would have an "and". It would also remove empty strings from the array and only append the commas and "and" if there were three or more values (two values would have just "and" between them.)

function formatWords(words){

  // this returns an empty string for empty arrays
  if (words === null ){
    return '';
  }

  // remove any empty strings within an array by filtering for true (array has at least one element/value)
  words = words.filter(Boolean);

  //returning an empty string if the array has no elements inside it
  if (words.length === 0)
    return '';

  //return a string when it contains a single element
  if(words.length === 1){
    return words.join();
  }

  // when an array has more than one element, remove the last element then turn the array into a string with concatination (using temparate literal) so that the returned string is formatted with a comma between each original element except the last, which is separated with an "and"
  else if (words.length >1) {
    let last = words.pop();

    return `${words.join(', ')} and ${last}`;
  }
}