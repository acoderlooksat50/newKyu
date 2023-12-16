/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
P: Input a number
E: 2 = 3; 8 = 36
R: the added number
P: take the input number and do a for loop from 1 to the input number.  On each iteration add the number to the number before.  
*/

var summation = function (num) {
    let sum = 0
    for (i = 0; i <= num; i++){
        sum += i;
    }
    return sum
  }