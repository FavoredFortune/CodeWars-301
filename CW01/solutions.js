'use strict';

//today's codewar challenge abbreviate two word names to first initials separated by a dot

function abbrevName(name){
  //split name into two string values
  let nameArray = name.split(" ");

  //get first letter of first name
  let firstName = nameArray[0].charAt(0);

  //get first letter of last name
  let lastName = nameArray[1].charAt(0);

  //return concatenated first initial and last initial separated by a dot
  return `${firstName.toUpperCase()}.${lastName.toUpperCase()}`;

}