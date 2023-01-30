

// //
// class Pet {
//     constructor(name, age, type, breed, colour, time, legs, size){
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//         this.legs = legs;
//         this.size = size;
//     }
//     get petInfo() {
//         return (`${this.name} is a ${this.type}, ${this.age} years old.`)
//     }
//     set petNewAge(newAge){
//         this.age = newAge
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last fed updated to ${this.lastFed} for ${this.name}`;
//     }
// }
// //let petArray = []

// const Shadow = new Pet("Shadow",2,"Dog","Wippet Terrier?","Black","08:00",4,"long")
// //console.log(Shadow.feedPet("15:00"))
// const Bengie = new Pet("Bengie",10,"dog","small","white","09:00",4,"small")
// //petArray.push(Shadow)
// //petArray.push(Bengie)
// //console.log(petArray)
// console.log(Bengie.petInfo)


// class PetMeds extends Pet{
//     constructor(name, age, type, breed, colour, time, legs, size, mtime){
//         super(name, age, type, breed, colour, time, legs, size);
//         this.lastMeds = mtime;
//     }
//     get petInfo() {
//         return (`${this.name} is a ${this.type}, ${this.age} years old who needs medication`)
//     }
//     giveMeds (time) {
//         this.lastMeds = time;
//         return `last meds updated to: ${this.lastMeds} for ${this.name}`
//     }
// }
// const Barney = new PetMeds("Barney",40,"dog","small","white","09:00",4,"small","12:00")
// console.log(Barney.petInfo) // how getters work
// Barney.petNewAge = 41 // how setters work
// console.log(Barney.petInfo)



// // Activity 1

// class Rental {
//     constructor(name,address,contactNo,moviesArray){
//         this.name = name;
//         this.address = address;
//         this.contactNo = contactNo;
//         this.moviesArray = moviesArray;
//     }
//     logMovies(){
//         // Will print out each film in the array serperatly
//         console.log("Movies Available:")
//         for(let i=0;i<this.moviesArray.length;i++) {
//             console.log(`${this.moviesArray[i][0]} for $${this.moviesArray[i][1]}`)
//         }
//     }
//     newMovie(movieName){
//         this.moviesArray.push(movieName)
//     }
// }

// // making the array here 
// // to make the instance declaration easier to read
// let myArray = [
//     ["Sunset blvd.",2],
//     ["Sabrina",5],
//     ["The Apartment",3],
// ]
// const testShop = new Rental("movie house", "bedford falls","09212908765",myArray)
// //console.log(testShop)
// //testShop.logMovies()

// // Activity 2
// // Activity 3
// testShop.newMovie(["Double Indemnity", 1])
// testShop.logMovies()


//MechaShadow.play(14)


// const add = (num1) => {
//     return (num2) => {
//         return num1 + num2;
//     }
// }
// console.log(add(2)(1));



// Stretch activity
// make a cyber pet

// have activities to do with methods

// include a time check 
// if time check is too far from last timecheck (eg 12hrs)
// consequences on action/happiness

// happiness too low = game over - functions won't run anymore

// class CyberPet {
//     constructor(type,lastPlay,lastFood,lastCleaning){
//         this.type = type;
//         this.lastPlay = lastPlay;
//         this.lastFood = lastFood;
//         this.lastCleaning = lastCleaning;
        
//         // starting value not using a parameter
//         this.happiness = 5
//     }
//     checkHappiness(){
//         // should probably use switches
//         if(this.happiness < 1)
//         {
//             console.log("uh oh")
//             return false
//         }
//         else if(this.happiness < 4)
//         {
//             console.log("doin bad")
//             return true
//         }
//         else if(this.happiness < 7)
//         {
//             console.log("doin okay")         
//             return true
//         }
//         else {
//             console.log("doin good")   
//             return true
//         }
//     }
//     play(timecheck){        
//         if(this.checkHappiness())
//         {
//             let timeDiff = this.fixTimeDiff(timecheck,this.lastPlay)

//             if(timeDiff > 5){
//                 //console.log("bad result")
//                 this.happiness -= 3
//             }
//             else{
//                 //console.log("good result")
//                 this.happiness += 1
//             }
//             this.lastPlay = timecheck            
//         }        
//     }
//     feed(timecheck){        
//         if(this.checkHappiness())
//         {
//             let timeDiff = this.fixTimeDiff(timecheck,this.lastFood)

//             if(timeDiff > 12){
//                 //console.log("bad result")
//                 this.happiness -= 3
//             }
//             else{
//                 //console.log("good result")
//                 this.happiness += 1
//             }
//             this.lastFood = timecheck            
//         }        
//     }
//     clean(timecheck){        
//         if(this.checkHappiness())
//         {
//             let timeDiff = this.fixTimeDiff(timecheck,this.lastCleaning)

//             if(timeDiff > 8){
//                 //console.log("bad result")
//                 this.happiness -= 3
//             }
//             else{
//                 //console.log("good result")
//                 this.happiness += 1
//             }
//             this.lastCleaning = timecheck            
//         }        
//     }
//     fixTimeDiff(timeDiffX,lastX){
//         let timeDiff = (timeDiffX - lastX)
//         if(timeDiff <= 0)
//         {
//             timeDiff += 24
//         }
//         //console.log(timeDiff)
//         return timeDiff
//     }
// }
// const MechaShadow = new CyberPet("Mecha Dog",24,6,6)
// MechaShadow.play(8)
// MechaShadow.play(16)
// MechaShadow.play(24)
// MechaShadow.play(1)
// // would work a lot better with a real timer 
