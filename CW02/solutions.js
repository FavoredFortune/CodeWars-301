'use strict';

//today's codewar challenge move the tail and head in meerkat arrays so the head comes first and the tail comes last.

function fixTheMeerkat(arr) {
  let newTail = arr[0];
  arr[0] = arr[2];
  arr [2] = newTail; 
  return arr;
}
