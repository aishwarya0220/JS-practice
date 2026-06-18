// let myCourses = ["HTML","CSS","JS","TS"]

// function logValue(arr) {                    // parameter and argument
//     for (let i=0;i < arr.length ;i++){
//         console.log(arr[i])
//     }
// }

// logValue(myCourses)






// let details = {
//     name: "Japesh",
//     age: 21,
//     gay: false                           // localStorage setting & getting values
// }

// localStorage.setItem("user", JSON.stringify(details)) //lS.sI("asdasd","uyuyuy")

// let info = JSON.parse(localStorage.getItem("user"))

// console.log(info)






// let jaiEL = document.getElementById("jai")

// let data = [
//     {
//         player: "Jai",
//         score: 45
//     },
//     {
//         player: "Lavish",               // Retrieve value from object within an array
//         score: 65
//     }
// ]

// jaiEL.addEventListener("click", function(){
//     console.log(data[0])
// })






// let countries = ["India","China","USA"]

// let fruits = ["Apple","Banana"]

// function generateSentence(desc, arr) {
//     let string = `The ${arr.length} ${desc} are ${arr}`     // template literals
//     console.log(string)
// }

// generateSentence("largest countries", countries)






// const imgs = [
//     "amitabh.png",
//     "nigga.jpg"
// ]

// let space = document.getElementById("greeting")

// function imageDisplay() {                                   // Images from innerHTML
//     for (let i=0; i < imgs.length; i++){
//     space.innerHTML += `<img class="team-img" src="${imgs[i]}">`
//     }
// }

// imageDisplay()







// const price = "24.968769778"
                                                    // Rounding off the decimal
// const buy = document.getElementById("jai")

// buy.textContent = `Buy ${Number(Math.round(price*100)/100)}`       // ${price.toFixed(2)}






// const playerAnswer = 8

// const correctAnswer = 6                         // Ternary operators

// const message = playerAnswer === correctAnswer ? "You guessed right" : playerAnswer > correctAnswer ? "You guessed higher" : "You guessed lower"

// console.log(message)







// function selectItem(item) {
//     let price = 0

//     switch(item){
//         case "coffee":
//             price = 2
//             break

//         case "sandwiches":
//             price = 5
//             break
//                                                            // switch-case
//         case "lemonade":
//             price = 4
//             break
        
//         case "pizza":
//             price = 8
//             break

//         default:
//             return `Sorry, we dont sell ${item}`
//     }

//     return `You selected ${item}. Pls pay $${price}`
// }

// console.log(selectItem("cake"))







// const dreamHolidays = {
//     destination : "Dubai",
//     activities : "Dirt Biking",
//     food : "North-Indian",
//     airways : "Emirates"                        // Object destructuring
// }

// const {destination,activities,food,airways} = dreamHolidays

// console.log(destination+activities+food+airways)






// function logAnswer(answer,points) {
//     console.log(`The answer is ${answer}. If you got that right give yourself ${points} points.`)
// }

// setTimeout(logAnswer, 3000, "Lima", 10)         // setTimeout
//                                                 // Can use clearTimeout(embedded to an html button maybe) to cancel the running of the delayed code
// console.log("What is the capital of Peru?" )






// import { myCourses as course} from './export.js'        // named export/import

// console.log(course)







// const now = new Date()                   // 'new' bcoz reqd for modern ES6 constructors. legacy constructors work fine w/o them

// console.log(now.getFullYear())                  // date() constructor







// function checkUsername(username) {
//     if (username){
//         console.log(username)
//     } else {
//         console.log(new Error("No valid username provided"))        // can substitute throw with console.log but throw 
//     }                                                               // makes code below it redundant
    
// }

// checkUsername()








// let currentTicket = 0

// function giveTicket() {
//     return ++currentTicket                  // pre-increment
// }

// console.log(`Current ticket no: ${giveTicket()}`)







// const Nvidia = BigInt(63_45_32_345)             // bigInt use cases include large numbers used in cryptography or DB

// console.log(typeof Nvidia)








// console.log(mashroof())

// function mashroof(){
//     return "kota me aane se belly fat mila"         // hoisting manifestation
// }

// console.log(kabeer)                                 // cant access kabeer b4 initializn

// const kabeer = uruguay








// const speedWarning = (driveSpeed, warningSpeed) => {
//     if (driveSpeed > warningSpeed){
//         return `Slow down. Your speed is exceeding ${warningSpeed}. No overspeeding`
//     } else
//     return `Your speed is ${driveSpeed} `       // arrow function
// }

// console.log(speedWarning(90,80))








function setPermissionLevel(setPermission, ...names) {                             // ...xyz  <-- rest parameter
    names.forEach((name) => console.log( `${name} now has ${setPermission} level access`))      //(name) => console.log is equivalent to
}                                                                                               // function(name){ 
                                                                                                // console.log }

console.log(setPermissionLevel("admin","Kajak","Kafka","blyat"))