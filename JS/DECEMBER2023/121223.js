/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
P: A word (string) of length 0 < str < 1000 
R: the single middle character if odd, 2 middle characters if even
E: test (4) = es; middle (6) = dd; testing (7) = t
P: mod2 the input length. if even, divide the string length and return the length index and length index + 1.  if odd, divide and floor the string lenth. return the string length + 1.  
*/

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

