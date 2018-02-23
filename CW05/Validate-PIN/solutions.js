'use strict';

//This codewar challenge was to validate a PIN to be sure it had either 4 or 6 digits and contained only numbers.

function validatePIN (pin) {

  //the \d is meant to match only digits, so if a string has something other than digits it returns false
  // {4} and {6} are meant to match strings that are only 4 or 6 characters in length
  // the | is meant to make it either 4 or 6 digits
  //each works for its own part, but the two don't work together 
  //currently passing 51 failing 7

  let res =  /^([\d]{4}|[\d]{6}])/g.test(pin);
  return res ? true : false;
}

