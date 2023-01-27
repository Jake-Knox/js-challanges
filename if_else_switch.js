
// Activity 1

// let music = "nothing"

// if( music == "classical"){
//     console.log("how relaxing")
// }
// else if (music == "disco")
// {
//     console.log("abba")
// }
// else if ( music == "Bob Dylan")
// {
//     console.log("wow i love bob dylan")
// } 
// else {
//     console.log(`wow ${music} sounds great`)
// }


// let myBool = 0

// if( myBool === false){
//     console.log("true");
// }
// else{
//     console.log("false");
// }


// let food = "ice cream";
// let hunger = "full";

// if (hunger == "full" && food == "ice cream") {
//     console.log("Of course, who wouldn't?");
// }
// else if( hunger == "hungry" && food == "ice cream") {
//     console.log("yes please I'm starving, could I also have pizza?");
// }
// else if (hunger == "hungry" && food == "sprouts") {
//     console.log("Actually, I can wait!");
// }
// else{
//     console.log("no thanks, I'm stuffed.");
// }


// let food = "sprouts"

// if (food == "ice cream" || food == "pizza") {
//     console.log("yay lets eat");
// }
// else if(food == "sprouts" || food == "broccoli")
// {
//     console.log("ugh no thanks");
// }
// else {
//     console.log("okay go on then why not");
// }


// let food = "sprouts"

// switch(food) {
//     case "ice cream":
//     case "pizza":
//         console.log("yay lets eat")
//         break
//     case "sprouts":
//     case "broccoli":
//          console.log("ugh no thanks")
//         break
//     default:
//         console.log("okay go on then")
// }



//
// JS Activities
//

// Activity 1 at start of document


// // Activity 2
// let age = 18
// // using >= 18 instead of > 17
// if (age >= 18){
//     console.log("Yes I can serve you")
// }
// else{
//     console.log("You aren't old enough!")
// }



// // Activity 3
// let age = 18
// let country = "UK"
// if (age > 17 && country == "ESP") {
//     console.log("Yes I can serve you")
// }
// else{
//     console.log("You aren't old enough!")
// }



// // Activity 4
// let today = "Wednesday"

// if(today == "Saturday" || today == "Sunday")
// {
//     console.log("Yay it's the weekend!")
// }
// else
// {
//     console.log("oh no... work again...")
// }

// // Activity 4 (switches)
// let topping = "veg"

// switch (topping){
//     case "pepperoni":
//     case "sausage":
//         console.log("sure")
//         break
//     case "mushroom":
//         console.log("no thanks")
//         break
//     default:
//         console.log(`why not a ${topping} pizza?`)
// }



// // Activity 5
// let password = "test"
// if(password.length < 8)
// {
//     console.log("password is too short")
// }
// else{
//     console.log(`password: ${password} seems ok`)
// }



// // Activity 6
// let num = 123 //try = 100, 120
// //console.log(num % 5) // to check the result

// if(num % 3 == 0 && num % 5 == 0){
//     console.log("fizz buzz");
// }
// else if(num % 5 == 0)
// {
//     console.log("fizz");    
// }
// else {
//     console.log(num)
// }



// // Activity 7
// let time = 14
// let placeOfWork = "codenation course"
// let home = "home"
// let task = "specsavers picking up my new glasses"

// if(time > 9 && time < 17){
//     console.log(`I am at ${placeOfWork}`)
// }
// else if (time == 19)
// {
//     console.log(`I am at ${task}`)
// }
// else{
//     console.log(`I am at ${home}`)
// }



// // Activity 8
// // using lastIndexOf() - found... https://stackoverflow.com/questions/71149343/index-of-last-vowel-in-a-string
// // trying to use just things from the tutorials

// let jibberish = "cajawiduaoanywnuuupouqiwecfuybwyaeeapnaeeyrbwpiaynfcrwpqoymiomnbvcxz"
// let lastVowel

// // // I thought this would work, it only found the last a
// // let lastAEIOU = jibberish.lastIndexOf("e","a","i","o","u")
// // console.log(lastAEIOU)

// let lastA = jibberish.lastIndexOf("a")
// let lastE = jibberish.lastIndexOf("e")
// let lastI = jibberish.lastIndexOf("i")
// let lastO = jibberish.lastIndexOf("o")
// let lastU = jibberish.lastIndexOf("u")

// // not using if else to make sure each gets checked
// lastVowel = lastA
// if (lastE > lastVowel)
// {
//     lastVowel = lastE
// }
// if (lastI > lastVowel)
// {
//     lastVowel = lastI
// }
// if (lastO > lastVowel)
// {
//     lastVowel = lastO
// }
// if (lastU > lastVowel)
// {
//     lastVowel = lastU
// }
// console.log(lastVowel)



// // Activity 9
// let word = "seating"

// // length -1 because index starts at 0
// if(word.charAt(0) == word.charAt(word.length-1)) 
// {
//     console.log("true")
// }
// else{
//     console.log("false")
// }



// // Activity 10
// let num1 = 5
// let num2 = 4

// if( (num1 + num2) % 2 == 0){
//     console.log(`added = ${num1 + num2}`)
// }
// else{
//     console.log(`multiplied = ${num1 * num2}`)
// }



// // Activity 11

// // after looking online
// // you can't reverse a string with one method
// // but can reverse an array easily with .reverse()

// //console.log(elements.join(''));
// // // Expected output: "FireAirWater" from mozilla - array.join()

// let num = 1234321

// let forward = num.toString().split("").join("")
// console.log(`forward: ${forward}`)

// let reversed = num.toString().split("").reverse().join("")
// console.log(`reverse: ${reversed}`)
// if( forward == reversed)
// {
//     console.log("this is a palindrome")
// }
// else{
//     console.log("this is not a palindrome")
// }



