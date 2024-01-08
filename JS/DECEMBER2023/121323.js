//Remove first and last character from a given string.

function removeChar(str){
    let newStr =str.substring(1,str.length-1)
    return newStr
  }

/* One line
let removeChar = (str) => str.substring(1,str.length-1)
*/

/* str.slice also works in this instance:

function removeChar(str) {
  return str.slice(1, -1);
}
*/