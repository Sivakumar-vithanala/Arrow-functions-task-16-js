//1.Write an arrow function that takes two parameters, a and b, and returns their sum.
let sum = (a,b) => (a+b);
console.log(sum(2,4));


//2.Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
let one = name => `Hello, ${name}!`;
console.log(one('siva kumar'));


//3.Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.
let  isEven = (num) => num % 2 === 0;
console.log(isEven(2))


//4.Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.
let numberIsGreaterThanTen = (num) => num > 10;
console.log(numberIsGreaterThanTen(12));


//Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”
let compareStrings = (str1, str2) => 
  str1.length > str2.length ? str1 : str1.length < str2.length ? str2 : "Equal Length";
  console.log(compareStrings("Hello", "World!"));
  console.log(compareStrings("Apple", "Mango"));
  console.log(compareStrings("JavaScript", "Java"));
  