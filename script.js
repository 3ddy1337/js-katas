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

DESCRIPTION:
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

DESCRIPTION:
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

// Return negative *****************************************************************************
/*

DESCRIPTION:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/

function makeNegative(num) {
  let newNum = num;
  if (newNum > 0) {
    // Check if number is positive
    return newNum * -1; // Transform to negative
  } else {
    return newNum;
  }
}

// Even numbers in array **************************************************************************************
/*

DESCRIPTION:
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

*/

function evenNumbers(array, number) {
  const result = []; // Creating an empty array named result to store in the wanted numbers

  for (let i = array.length - 1; i >= 0; i--) {
    // Iterate through the array in reverse order
    if (array[i] % 2 === 0) {
      // Check if the current number @ [i] position is even
      result.unshift(array[i]); // Add the even number @ [i] position to the result array by using .unshift[]

      if (result.length === number) {
        // If we have collected enough even numbers, break out of the loop
        break;
      }
    }
  }

  return result;
}

// Sum of positive ******************************************************************************
/*

DESCRIPTION:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
  let sum = 0; // Initialize a counter, starting by 0
  for (let i = 0; i < arr.length; i++) {
    // Iterate through the array
    if (Math.sign(arr[i]) === 1) {
      // Using Math.sign === 1 to check if the number @ [i] position is positive
      sum += arr[i]; // Add found number to sum and save the new sum
    }
  }
  return sum;
}

// Opposite number ************************************************************************
/*

DESCRIPTION:
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34

*/

function opposite(number) {
  return number * -1; // Return the opposite of the number by * -1
}

// Counting sheep
/*

DESCRIPTION:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

function countSheeps(arrayOfSheep) {
  if (arrayOfSheep === null || arrayOfSheep === undefined) {
    //Return 0 if array is null or undefined
    return 0;
  }

  let count = 0; // Set counter for counting true values

  for (let i = 0; i < arrayOfSheep.length; i++) {
    // Iterate through the array
    if (arrayOfSheep[i] === true) {
      // If [i] is true than add 1 to count
      count++;
    }
  }
  return count;
}

// String repeat **********************************************************************************
/*

DESCRIPTION:
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

function repeatStr(n, s) {
  return s.repeat(n); // The method .repeat() repeats a string ()-times.
}

// or

/*
function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}
*/

// Abbreviate a two word name **********************************************************************
/*

DESCRIPTION:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

function abbrevName(name) {
  let nameArray = name.split(" "); // Split the word by the space and creates an array of it
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// Remove an exclamation mark from the end of string *****************************************************
/*

DESCRIPTION:
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/

function remove(string) {
  if (string[string.length - 1] === "!") {
    // Check if end of string is a "!"
    let lastChar = string.length - 1; // Determined the last char number for slice
    let newString = string.slice(0, lastChar); // Cut out until last char
    return newString;
  } else {
    return string;
  }
}
