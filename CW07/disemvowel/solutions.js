'use strict';

//This codewar challenge was to remove all vowels (but not y) from a string.

function disemvowel(str) {
  //use the regex .replace method to identify (first parameter) all vowels and replace them with a null value (second parameter)
  return str.replace(/[aeiou]/gi, '');
}

