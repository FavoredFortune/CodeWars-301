'use strict';

//This codewar challenge was to create two strings from one with alternate capitialization in each based on even/odd indicies

//not working, failed all tests, but did create an array of two identical strings!

function capitalize(s){
  let stringArray1 = [];
  let stringArray2 = [];
  let capitalArray = [];

  for(var i = 0; i < s.length; i++){
    if (i % 2 === 0) {
      stringArray1[i] = s[i].toUpperCase();
    }else {
      stringArray1[i] = s[i].toLowerCase();
    }

    if (i % 2 !== 0) {
      stringArray2[i] = s[i].toUpperCase();
    }else {
      stringArray2[i] = s[i].toLowerCase();
    }
  }
  capitalArray.push(stringArray1.join(''));
  capitalArray.push(stringArray2.join(''));

  return capitalArray;
}
