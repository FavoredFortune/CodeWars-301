'use strict';

//This codewar challenge was to validate a PIN to be sure it had either 4 or 6 digits and contained only numbers.

function validatePIN (pin) {

  //the \d matches only digits, so if a string has something other than digits it returns false
  // {4} and {6} are meant to match strings that are only 4 or 6 characters in length
  // the | is meant to make it either 4 or 6 digits
  //just needed to get rid of the brackets around the two clauses
  // YAY!!!!

  let res =  /^(\d{4}|\d{6})$/.test(pin);
  return res ? true : false ;
}

