'use strict';

//This codewar challenge was to validate a PIN to be sure it had either 4 or 6 digits and contained only numbers.

function validatePIN (pin) {

  //the \d is meant to match only digits, so if a string has something other than digits it returns false
  // {4| 6} is meant to match strings that are only 4 or 6 characters in length
  //each works for its own part, but the two don't work together  WEIRD

  let res =  /^([\d{4|6}])$/.test(pin);
  return  res ? true : false; 
}
