# CodeWars-301
*Replace All Dots - Kata 1 Day 1*

**Link to Kata:** https://www.codewars.com/kata/fixme-replace-all-dots

**Problem Domain:** This code is meant to replace all the dots. The problem? It's not working. Fix the code.

**Thought process for solution:**

1. Run code and see where errors are occuring using REPL, Chrome developer console, etc.

2. Based on tests identify likely locations for bugs

3. Approach potential errors in order of function of operations

**Solution work:**
1. Made solutions.js

2. Tried adding .secondchild to help skip first part of string (NOPE) in CodeWars platform

3. Tried replacing /./ with '.' and got this error: _"Sorry, try again :-( - Expected: 'one-two-three', instead got: 'one-two.three'"_

4. Tried duplicating replace method to get second "." with this code:
 str.replace('.', '-');
 return str.replace ('.','_');
 got this error: _"Sorry, try again :-( - Expected: 'one-two-three', instead got: 'one_two.three'"_

5. Found error in my code with a "_" instead of a "-" updated code and passed 2 and failed 102 tests:
    CODE: var replaceDots = function(str) {
    return str.replace ('.','-');

6. Looked up a potential solution on Google. Found potential solution on StackOverflow: https://stackoverflow.com/questions/13574980/jquery-replace-all-instances-of-a-character-in-a-string

7. It worked! Passed all tests I replaced '.' with /\./g
var replaceDots = function(str) {
 return str.replace(/\./g,'-');
}

