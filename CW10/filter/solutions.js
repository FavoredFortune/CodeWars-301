'use strict';

//This codewar challenge was to filter out strings from an array.

function filter_list(l) {

  //making this more elegant and using return directly instead of creating a new variable with the filter method and then returning the variable. Found and applied typeof (so helpful!!)
  return l.filter(i=> typeof i !== 'string');
}