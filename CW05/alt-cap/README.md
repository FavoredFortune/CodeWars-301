# CodeWars-301
* Alt Cap - Kata 7 Weekend 1*

**Link to Kata:** 
https://www.codewars.com/kata/alternate-capitalization 

**Problem Domain:** This code is meant to capitalize the letters that occupy even indexes and odd indexes separately in a string and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 

The input will be a lowercase string with no spaces.

**Thought process for solution:**

This time I pseudo coded on my own.
![Sooz Pseudo Code Whiteboard](Sooz_PseudoCode_Kata7.png)

I believe the best approach is to rules to do the following:
* duplicate the intial string
* use some kind of loop approach to change the caps in each string as outlined in the problem domain 
* put the two changed strings into an array

**Solution work:**
1. Made solutions.js

2. Made README

3. Tested a .even/.odd method that I apparently made up then .toUpperCase  neither of which worked on the strings with the array I created...Half way there and too tired to finish. Spent about 35 minutes on this.  

4. Came back to this fresh and decided my initial approach of duplicating the string within an array was dubious and could confuse me, so maybe confuse the computer?

5. Set function up with two arrays at the start and tried to create an array at the end with them, but that didn't work.

6. Decided to create a final array withe the correct capitals in it (with both logic tested arrays pushed into it)

7. Realized toUpperCase() alone wouldn't cover all potential test scenarios so added toLowerCase() to the for loop

8. Reapplied my modulus with to if loops to be sure I got each letter for each new array. First testing true then false.

9. IT WORKS!!!!!

**Source for image MD code**: http://www.disturbancesinthewash.net/journal/2012/8/11/how-to-add-an-image-with-link-in-markdown.html

