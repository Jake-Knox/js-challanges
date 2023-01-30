// // You can run this program in the terminal with      node script10.js
// // Develop an algorithm which will log different 
// // statements depending on the value of a variable

// // Declare a variable and assign to it any number you wish

// // Fill in the rest of this if statement structure 
// // Output
// // "Fizz" if the number is divisible by 3
// // "Buzz" if the number is divisible by 6
// // "Fizz Buzz" if the number is divisible by both 3 and 5
// // "No Fizz and No Buzz" otherwise
// let num = 17
// if (num % 3 == 0&& num % 5 == 0){
//     console.log("Fizz Buzz")
// } else if (num % 3 == 0){
//     console.log("Fizz")
// } else if (num % 5 == 0){
//     console.log("Buzz")
// }else {
//     console.log("no fizz no buzz")
// }
// // Run the program, and as an example
// // use the number 6 to output Fizz
// // 10 to output Buzz
// // 15 to output Fizz Buzz
// // 17 to output No Fizz and No Buzz
// // You can of course try as many other numbers as you wish




// Assign to word a word
word = "test";
    
let forwardArray= word.split("")
console.log(forwardArray)
let backwardsArray = forwardArray.reverse().join();
console.log(backwardsArray)

// Create an if sturcture which will check if the last letter of the word
// is the same (equal) as the first letter
// If it is equal, the return TRUE to the main page
// otherwise return false



// STRETCH
// Modify your program so that it checks if the word is the same if reversed
// This is called a palindrome; e.g. rotator
