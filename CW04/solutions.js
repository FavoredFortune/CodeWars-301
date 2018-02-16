'use strict';

//Today's codewar challenge was to validate a username to be sure it had between 4 and 16 characters, using only lowercase letters, numbers and underscores.

function validateUsr(username) {
  let res =  /^([a-z0-9_]{4,16})$/.test(username);
  return res;
}
