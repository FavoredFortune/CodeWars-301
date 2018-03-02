'use strict';

//To take a string of words and find the highest value word, with each word's value being a sum of each letter's value with a=1 and incrementing on through z=26. There will be no empty strings. And if two words are of equal, highest value, the word that is earliest in the string is to be returned.

function high(x){

  //break out all the words in a string into an array of each word as a string
  let wordArray = x.split(' ');

  //highscore variable
  let highValue = 0;

  //store current value during loop
  let currentValue = 0;

  //resulting string that matches high score
  let winningWord = '';

  //set each word as it's own array to calculate a value with a for loop that goes through the new word array
  for(let i in wordArray){
    let wordString = wordArray[i];

    //then loop through each word to calculate the value of each word using charCodeAt (note I tried 65 for lower case only and it wouldn't work I tried 96 for all characters (upper and lower) and, though the kata tests show no uppercases, that worked!)
    for(let j in wordString){
      currentValue += wordString.charCodeAt(j) - 96;
    }

    //see which value of the two variables highValue or current value is highest and set winning word accordingly
    if(currentValue > highValue){
      highValue = currentValue;
      winningWord = wordString;
    }
    // reset the current value to 0 before going back to start of the loop
    currentValue = 0;
  }
  return winningWord;
}
