// Remove spaces **********************************************************************************
/*
DESCRIPTION:
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/

function noSpace(x) {
  const removeSpace = x.split(" "); // Creates an array without spaces
  const newString = removeSpace.join(""); // Join the chars/strings without spaces
  return newString;
}

// Convert string to number ************************************************************************
/*
DESCRIPTION:
Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

const stringToNumber = function (str) {
  return Number(str); // Convert a string to a number
};

// or

/*
const stringToNumber = function(str){
    let newNumber;
      newNumber = Number(str);
      return newNumber;
    }

*/

// or

/*
const stringToNumber = function(str){
return parseInt(str);
}
*/

// Sum arrays *****************************************************************************************
/*
DESCRIPTION:
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    // Iterate through numbers
    total += numbers[i]; // Add number to total (total + number = newTotal + number = newTotal ...)
  }
  return total;
}
