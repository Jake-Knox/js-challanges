// write our code

// console.log("Hello World!".length)
// console.log("Hello World!.length")
// console.log(5)
// console.log("5")
// console.log("Hello, what is your name?".length)
// console.log("Hello".toLowerCase())


// // from W3C 
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// // replacing the text into a new variable
// console.log(text);
// console.log(newText);

// // replacing the text in the same variable
// text = text.replace("Microsoft", "JS");
// console.log(text);



// Activity 1

// let firstName = "Jake";
// let age = 24;
// let codeNationStudent = true;
// // log variables in one line
// console.log(firstName, age, codeNationStudent);

// firstName = "Jake k";
// age = 23;
// codeNationStudent = false;
// console.log(firstName)
// console.log(age)
// console.log(codeNationStudent)



// let modelOfCar = "nothing"
// console.log("I drive a " + modelOfCar)

// let modelOfCar = "volvo";
// let firstName = "Marko";
// let occupation = "Software developer";

// // using template literals
// console.log(`Hi, my name is ${firstName}. I'm a ${occupation} and I drive a ${modelOfCar}.`)



// // Activity 2

// let firstName = "Jake";
// let age = 24;
// let favColour = "green or orange"

// console.log(`Hi, my name is ${firstName}, I am ${age}. My fav colour is ${favColour}. :)`);



//console.log("hello".charAt(0));
//console.log("Hello".concat(""," world"));

// let firstName = "jAMES"
// // console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1,firstName.length).toLowerCase())

// let john = "dog";
// john = john.repeat(3);
// john = john.charAt(0).toUpperCase() + john.slice(1,4).toLowerCase() + john.charAt(4).toUpperCase() + john.slice(5,8).toLowerCase() + john.charAt(8).toUpperCase() + john.slice(9,12).toLowerCase();
// john.charAt(4).toUpperCase();
// john.charAt(8).toUpperCase();
// // //console.log(john.charAt(0).toUpperCase());
// console.log(john);
// //console.log("Hello".padStart(10,"?"));



// // Activity 3

// // what I may eat today for breakfast, lunch, dinner
// // output in a complete sentence
// // update the data and output again
// let breakfast = "toast"
// let lunch = "a meal deal"
// let tea = "peri peri chicken"

// console.log(`Today i fancy eating ${breakfast} for breakfast, ${lunch} for lunch and ${tea} for tea.`)

// breakfast = "porridge"
// lunch = "a pastie"
// tea = "something italian (like pasta) maybe"

// console.log(`But i might go for ${breakfast} for breakfast, ${lunch} for lunch and ${tea} for tea.`)



// // Activity 4

// // write code to calculate how many days from today to my birthday
// // output in a complete sentence
// let today = new Date("2023-1-25")
// let birthday = new Date("2023-10-2")

// // console.log(birthday - today) // returns in mili
// // console.log((birthday - today)/1000) // returns in sec
// // console.log(((birthday - today)/1000)/60) // returns in min
// // console.log((((birthday - today)/1000)/60)/60) // returns in hrs
// // console.log(((((birthday - today)/1000)/60)/60)/24) // returns in days

// daysDiff = Math.round(((((birthday - today)/1000)/60)/60)/24)
// //using Math.round to get rid of the decimal 
// console.log(`It is ${daysDiff} days until my birthday!!!`)

// // extra: calculate how many days since birth. 
// // - javascript data on MDN

// let dOB = new Date("1998-10-2")
// daysSinceBirth = Math.round(((((today - dOB)/1000)/60)/60)/24)
// console.log(`It has been ${daysSinceBirth} days since I was born...`)
