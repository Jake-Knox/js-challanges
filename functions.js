
// const holidayDestination = () => {
//     console.log("yay I'm going on holiday")
// }
// holidayDestination()


// Activity 1

// const sayHello = () => {
//     console.log("hi there, how are you?")
// }
// sayHello()

// adding parameters

// const holidayDestination = (country, month) => {
//     console.log(`Yay! I'm going to ${country} in ${month}. I can't wait!`)
// }
// holidayDestination("Bolton","December")

// Activity 2

// const sayHello = (myName, drink) => {
//     console.log(`Hi ${myName}, would you like a ${drink}?`)
// }
// sayHello("Jake","brew")

// const multiply = (num1, num2) => {
//     return num1 * num2
// }
// console.log(multiply(2,5))


// // messing with fucntions within functions
// let start = 1
// let end = 500

// const func1 = (num1, num2) => {
//     return (num1 * num2) + (num1 + num2)
// }

// const func2 = (numS,numE) =>{

//     let newEnd = func1(numS,numE)

//     let x = Math.floor(Math.random()*newEnd)+1
//     return x
// }
// console.log(func2(start,end))



//


// const replenishStock = (procuctCode) => {
//     console.log(`Order profuct number ${procuctCode} stock is low!`)
// }

// const reducePrice = (procuctCode, origionalPrice) => {
//     let salePrice = origionalPrice /= 2
//     console.log(`Product number ${procuctCode} is now £${salePrice}`)
// }

// const checkStock = (procuctCode, quantity, origionalPrice) => {
//     if (quantity <= 10){
//         replenishStock(procuctCode)
//     }
//     else if(quantity > 100) {
//         reducePrice(procuctCode, origionalPrice)
//     }
//     else{
//         console.log("Don't order more stock")
//     }
// }
// checkStock(345678, 200, 100)



// ways of declaring functions

// // Arrow function
// const addMe = (num1, num2) => {
//     return num1 + num2
// }
// addMe(4,5)

// // Function Declaration
// function addMe2(num1, num2){
//     return num1 + num2
// }
// addMe2(4,5)

// // Anonnymous Function
// const addMe = function(num1, num2) {
//     return num1 + num2
// }
// addMe(4,5)
