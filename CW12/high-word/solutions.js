'use strict';

//To take a string of words and find the highest value word, with each word's value being a sum of each letter's value with a=1 and incrementing on through z=26. There will be no empty strings. And if two words are of equal, highest value, the word that is earliest in the string is to be returned.

function high(x){

  //break out all the words in a string into an array of each word as a string
  let wordArray = x.split(' ');

  //trying to work to add the letters of a string together by their charAt value, but I"m wrong
  let sumArray = wordArray.reduce(function(){
    for (let i in wordArray){
      wordArray[i].reduce( i =>i.chartAt(i));
    }
  });
  console.log(sumArray);

}