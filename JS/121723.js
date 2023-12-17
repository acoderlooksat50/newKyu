/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
P: We're going to be given a integer input.  If the input number is a perfect square, then find the next perfect square after that number
E: 121 --> 144; 625 --> 676
R: -1 if the input is not a perfect square.  the next perfect square if the input is a perfect square
P: 1. take the input and determine if it's a perfect square.
    Math.sqrt(n) to find square root and save.
    if Number.isInteger() then look for next square else return -1
   2. if the input is a perfect square, find the next one.
    
   3. return result
*/

function findNextSquare(sq) {
    let square = Math.sqrt(sq)
    if (Number.isInteger(square)){
        let newNumber = square + 1
        return newNumber*newNumber
    }else {return -1}
    
  }

/* Ternary solution
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }
*/