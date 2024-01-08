/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
P: 
E: [1, 5.2, 4, 0, -1] =  9.2; 
R:
P:
*/

function sum (numbers) {
    "use strict";
    const result = numbers.reduce((acc,count)=> acc + count, 0)
    return result 
};

/* one line:
const sum = numbers => numbers.reduce((acc,count) => acc + count, 0)
*/