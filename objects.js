
// let day = "monday"

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales Assistant",
//     married: false,
//     homeOwner: true,
//     hobbies: ["tennis", "gardening", "gungee jumping"],

//     marketingOp (){
//         if( this.homeOwner == false && this.age > 25){
//             return "send mortgage offer email"
//         }
//         else if (this.homeOwner == false && this.age < 25){
//             return "send summer holiday fun credit card offer"
//         }
//         else if (this.homeOwner == true && this.age > 25){
//             return "pension investment offer"
//         }
//         else {
//             return "send sensible savings offer"
//         }
//     }

// }
// console.log(person.marketingOp())

// console.log(person.firstName)
// console.log(person["firstName"])

// if (day === "saturday" || day === "sunday"){
//     console.log(`great it's ${day}, lets play ${person.hobbies[0]}!`)
// }
// else{
//     console.log(`oh no it's ${day} I hate being a ${person.occupation}!`)
// }


// // Activity 1
// const pet = {  
//     petName: "Shadow",
//     typeOfPet: "dog",
//     petAge: 2,
//     colour: "black",
//     features: ["medium size","quiet","likes running","needy"],

//     eat() {
//         console.log(`${this.petName} is eating`)
//     },
//     drink() {
//         console.log(`${this.petName} is drinking`)
//     }
// }
//console.log(`My pet is called ${pet.petName}, she is a ${pet.petAge} year old ${pet.typeOfPet} and has ${pet.colour} fur.`)

// // Activity 2
//pet.petAge ++
//console.log(pet.petAge)
// pet.colour = "black but with a little bit of grey"
// console.log(`My pet is called ${pet.petName}, she is a ${pet.petAge} year old ${pet.typeOfPet} and has ${pet.colour} fur.`)

// // Activity 3
//console.log(`${pet.petName} is ${pet.features[0]}, ${pet.features[1]} and ${pet.features[2]}.`)

// // activity 4
// pet.eat()
// pet.drink()

// // Activity 5
// const coffeeShop = {
//     branch: "melbrucks",
//     drinks: ["coffee","tea","water"],
//     drinkPrices: [3,3,0],

//     food: ["burger","toast","avocado"],
//     foodPrices: [5,2,10],
    
//     // takes an array of each item from the food menu (1,2,3)
//     // logs cost of each item ordered and total amount of the order
//     foodOrdered(foodArray){
//         let total = 0
//         for(let i=0;i<foodArray.length;i++){
//             if(foodArray[i] == 1){
//                 total += this.foodPrices[0]
//                 console.log(`burger: £${this.foodPrices[0]}`)
//             }
//             if(foodArray[i] == 2){
//                 total += this.foodPrices[1]
//                 console.log(`toast: £${this.foodPrices[1]}`)
//             }
//             if(foodArray[i] == 3){
//                 total += this.foodPrices[2]
//                 console.log(`avocado: £${this.foodPrices[2]}`)
//             }
//         }
//         console.log(`food total: £${total}`)
//     },

//     // takes an array of each item from the drinks menu (1,2,3)
//     // logs cost of each item ordered and total amount of the order
//     drinksOrdered(drinkArray) {
//         let total2 = 0
//         for(let j=0;j<drinkArray.length;j++){
//             if(drinkArray[j] == 1){
//                 total2 += this.drinkPrices[0]
//                 console.log(`coffe: £${this.drinkPrices[0]}`)
//             }
//             if(drinkArray[j] == 2){
//                 total2 += this.drinkPrices[1]
//                 console.log(`tea: £${this.drinkPrices[1]}`)
//             }
//             if(drinkArray[j] == 3){
//                 total2 += this.drinkPrices[2]
//                 console.log(`water: £${this.drinkPrices[2]}`)
//             }
//         }
//         console.log(`drinks total: £${total2}`)
//     },
//     // logs the food and drink arrays with prices
//     postMenu(){
//         console.log("Food Menu:")
//         for(let k = 0; k < this.food.length; k++){
//             console.log(`${k+1}: ${this.food[k]} £${this.foodPrices[k]}`)
//         }
//         console.log("Drinks Menu:")
//         for(let l = 0; l < this.drinks.length; l++){
//             console.log(`${l+1}: ${this.drinks[l]} £${this.drinkPrices[l]}`)
//         }

//     }
// }
// coffeeShop.postMenu();
//coffeeShop.foodOrdered([1,1,2]);
//coffeeShop.drinksOrdered([1,1,2,3,3]);

