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
  let total = 0; // If the array is empty it returns 0, like in the description said.
  for (let i = 0; i < numbers.length; i++) {
    // Iterate through numbers
    total += numbers[i]; // Add number to total @ [i] (total + number[0] = newTotal + number[1] = newTotal ...)
  }
  return total;
}

// Number of people in the bus ***************************************************************************

/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

[[10,0],[3,4],[1,8]]
*/

let number = function (busStops) {
  let count = 0; // Starting counter for in and out
  for (let i = 0; i < busStops.length; i++) {
    // Iteration through the first array
    const on = busStops[i][0]; // Variable "on" for passangers go into the bus. [i] = The point in the iteration and [0] for the first number in the nested array.
    const out = busStops[i][1]; // Variable "out" for passangers go out of the bus. [i] = The point in the iteration and [1] for the second number in the nested array.
    count += on; // count + on = newCount (and so on)
    count -= out; // newCount - out = newCount (and so on)
  }
  return count; // Return count for the whole array iteration.
};

// Get the middle character ****************************************************************************

/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s) {
  if (s.length === 1) {
    // Single char string
    return s;
  } else if (s.length % 2 === 0) {
    // Even string
    const firstCharEven = s.length / 2 - 1;
    const secondCharEven = firstCharEven + 2;
    const stringEven = s.substring(firstCharEven, secondCharEven);
    return stringEven;
  } else {
    // Odd string
    const CharOdd = Math.floor(s.length / 2);
    const stringOdd = s[CharOdd];
    return stringOdd;
  }
}
