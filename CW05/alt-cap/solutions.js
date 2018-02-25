'use strict';

//This codewar challenge was to create two strings from one with alternate capitialization in each based on even/odd indicies

//not working, failed all tests, but did create an array of two identical strings! 

function capitalize(s){
  var stringArray = [s,s];
  var stringA = stringArray[0];
  stringA.toupperCase();
  var stringB = stringArray[1];
  stringB.toUpperCase();
  stringArray=[stringA,stringB];
  return stringArray;
}