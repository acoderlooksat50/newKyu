/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
P: string of only lower case letters
R: The count of vowels (a,e,i,o,u)
E: abracadabra = 5
P: take the string and iterate through each letter, if the letter is equal to one of the vowels then count is equal to count + 1*/

function vowelCount(str){
    let count = 0;
    for(let i = 0; i <= str.length-1; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count += 1
        }
    }
    return count
}

/* Solution splitting string into an array:
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   } 
*/

/*Solution using for(x in str) and switch:
function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;}
*/
  