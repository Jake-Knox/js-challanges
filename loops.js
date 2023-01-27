// FOR LOOPS

// for (let i = 0; i < 4; i++){
//     console.log(i)
// }



// // Activity 1

// let favHolidayDestinations = [
//     "florence",
//     "vienna",
//     "bolton",
//     "cordoba",
//     "rotterdam",    
// ]

// for (let i = 0; i < favHolidayDestinations.length; i++){
//     console.log(favHolidayDestinations[i])
// }

// for (let i = 0; i<=10; i++){
// console.log(i += 2)
// }


//let evenNumbers = []
// for (let n = 1; n < 20; n++){
//     if(n % 2 == 0){
//         evenNumbers.push(n)
//     }
// }
//console.log(`The even numbers between 0 and 20 are: ${evenNumbers}`)



// // Activity 2

// // in reverse order
// let evenNumbers = []
// for (let n = 19; n > 0; n--){
//     if(n % 2 == 0){
//         evenNumbers.push(n)
//     }
// }
// console.log(`The even numbers between 20 and 0 are: ${evenNumbers}`)



// // Activity 3
// // Odd numbers 1-30
// let oddNumbers = []
// for (let n = 0; n < 30; n++){
//     if(n % 2 != 0){
//         oddNumbers.push(n)
//     }
// }
// console.log(`The odd numbers between 0 and 30 are: ${oddNumbers}`)


// // WHILE LOOPS

// let lives = 3
// while (lives > 0){
//     console.log("Well done! you're still in the game.")
//     lives--
// }
// console.log("game over!!!!")

// let currentDiceRoll = "3"
// while(currentDiceRoll !=1){
//     console.log(currentDiceRoll)
//     currentDiceRoll = Math.floor(Math.random()*6)+1
// }
// console.log(currentDiceRoll)



// // Activity 3
// // loop from age 0 to 18
// let age = 0
// while (age < 18){
//     console.log(`you are a child (${age})`)
//     age++
// }
// console.log(`you're an adult`)


// // Activity 4
// // Generate 6 random numbers - console log them
// let count = 0
// while (count < 6){
//     console.log(Math.floor(Math.random()*10))
//     count++
// }


// // Activity 5
// let films = [
//     "shrek",
//     "shrek 2",
//     "shrek the third",
//     "shrek 4 ever after"
// ]
// for (let i = 0; i < films.length; i++){
//     console.log(films[i])
//     if(i == 2){
//         if(films[i] == "ghostbusters"){
//             console.log("yay its ghostbusters")
//         }
//         else{
//             console.log(`${films[i]}? BOOOO, i wanted ghostbusters!`)
//         }
//     }
// } 


// // Activity 6
// for(let i = 0; i < 7; i++){
//     let num = Math.floor(Math.random()*1000)+1
//     if(num % 7 == 0){
//         console.log(`YES: ${num} is divisible by 7`)
//     }
//     else{
//         console.log(`NO:  ${num} is not divisible by 7`)
//     }
// }


// Activity 7
// let bobsFollowers = [
//     "jack",
//     "jill",
//     "maria",
//     "marco"
// ]
// let hannahsFollowers = [
//     "jill",
//     "jack",
//     "simon",
//     "art"
// ]
// for (let i = 0; i < bobsFollowers.length; i++){
//     for(let j = 0; j < hannahsFollowers.length; j++){
//         if(hannahsFollowers[j] == bobsFollowers[i]){
//             console.log(`Match found: ${hannahsFollowers[j]}`)
//         }
//     }
// }

// for (let i = 0; i < 3; i++){
//     console.log(`i=${i}`)
//     for (let i=j = 0; j< 3; j++){
//         console.log(`  j=${j}`)
//     }
// }


