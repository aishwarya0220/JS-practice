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








// function setPermissionLevel(setPermission, ...names) {                             // ...xyz  <-- rest parameter
//     names.forEach((name) => console.log( `${name} now has ${setPermission} level access`))      //(name) => console.log is equivalent to
// }                                                                                               // function(name){ 
//                                                                                                 // console.log }

// console.log(setPermissionLevel("admin","Kajak","Kafka","blyat"))







// function greetingEmployees(sender, ...receivers){
//     return receivers.map((receiver) =>              // if single line then no {} in arrow function
//        `<p>Dear ${receiver}</p>
//         <p>Thank you for all your</p>
//         <p>hardwork throughout</p>
//         <p>the year!<p>
//         <p>Best wishes,</p>
//         <p>${sender}</p>`
//     ).join("")
// }

// document.getElementById("labelscontainer").innerHTML = greetingEmployees("Tom","Sally","Mike","Rob","Harriet")







// const num = [10,20,30,30]

// const totalSum = num.reduce((accumulator,currentValue) => {      // array.reduce()
//     return accumulator + currentValue
// })

// console.log(totalSum)







// function display(name = "Baldev") {
//     return `Hello ${name}`
// }

// console.log(display("Kanishk"))             // default parameter runs when argument is null 

// console.log(display())








// fetch("https://apis.scrimba.com/bored/api/activity")        // fetching data from api    
//     .then(response => response.json())                      // .json() for interacting with data previously in json format
//     .then(data => console.log(data))








// async function response(){                  // https://www.geeksforgeeks.org/javascript/synchronous-and-asynchronous-in-javascript/
//     const response = await fetch("https://apis.scrimba.com/bored/api/activity")
//     const data = await response.json()      // await is used b4 promise returning exprssn. pauses execution of async f(n) until promise settles
//     console.log(data)                       // a Promise is an object that represents the eventual result of an asynchronous operation.
// }

// response()








// async function response(){
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")   // if scrimba url entered then CORS error - HTTP headers that allow web servers to declare which cross-domain origins are permitted to access their resources
//     if(!response.ok){                                                                       // API returns JSON data (objects/arrays), which often comes from a database or some backend data source.
//         throw new Error("Some issue with API")
//     }                                                            
//     const data = await response.json()
//     console.log(data)
//     } catch(err){
//         console.log(err)
//     } finally {
//         console.log("Operation completed")
//     }
// } 

// response()








// async function test(){
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: 'PUT',                  // GET,POST,PUT,PATCH,DELETE
//         headers: {
//             "Content-Type": 'application/json'              // setting server to interpret data we send as json. | use accept : app/json for GET
//         },
//         body: JSON.stringify({
//             title: "cyka blyat",
//             body: "rush b no stop",
//             userId: 101
//         })
//     })
//     const data = response.json()

//     if(!response.ok){
//         throw new Error("Resource Loading issue")
//     }
//     console.log(data)
//     } catch(err){
//         console.log(err)
//     } finally{
//         console.log("Promise operation ended")
//     }
// }

// test()








// const promise = new Promise((resolve,reject)=> {
//     const random = Math.random() > 0.5
//     if(random){
//         resolve("Successful")                    // Promise constructor
//     } else{
//         reject("Failed")
//     }
// })

// promise.then(request => console.log(request))
// .catch(response => console.log(response))








// function preLoadImg(url) {
//     return new Promise((resolve,reject)=> {
//         const myImg = new Image()
//         myImg.src="https://picsum.photos/id/237/200/300"
//         myImg.alt = "Image of a black dog"
//         document.body.append()
//         myImg.addEventListener("load", resolve)
//         myImg.addEventListener("error", reject)
//     })
// }

// preLoadImg().then(receipt => console.log(receipt))
// .catch(requiem => console.log(requiem))








// function uploadFile() {                                  // multiple promises called
//     return new Promise((resolve,reject)=> {
//         console.log("Step 1: Uploading file..")
//         setTimeout(()=> {
//             resolve()
//         }, 1000)
//     })
// }

// function processFile() {
//     return new Promise((resolve,reject)=> {
//         console.log("Step 2: Processing file..")
//         setTimeout(()=> {
//             resolve()
//         }, 1000)
//     })
// }

// function notifyUser() {
//     return new Promise((resolve,reject)=> {
//         console.log("Step 3: Notifying User..")
//         setTimeout(()=> {
//             resolve()
//         }, 1000)
//     })
// }

// try{
//     await uploadFile()
//     await processFile()
//     await notifyUser()
// }catch(err){
//     console.log(err)
// }finally{
//     console.log("All steps completed")
// }









function preLoadImg() {
    return new Promise((resolve,reject)=> {
        const myImg = new Image()
        myImg.src="https://picsum.photos/id/237/200/300"
        myImg.alt = "Image of a black dog"
        document.body.append(myImg)
        myImg.addEventListener("load", resolve)
        myImg.addEventListener("error", reject)
    })
}

function preLoadRandom() {
    return new Promise((resolve,reject)=> {
        const myImg = new Image()
        myImg.src="https://picsum.photos/seed/picsum/200/300"
        myImg.alt = "img-random"
        document.body.append(myImg)
        myImg.addEventListener("load", resolve)
        myImg.addEventListener("error", reject)
    })
}

function preLoadImage() {
    return new Promise((resolve,reject)=> {
        const myImg = new Image()
        myImg.src="https://picum.photos/200/300"
        myImg.alt = "random-img"
        document.body.append(myImg)
        myImg.addEventListener("load", resolve)
        myImg.addEventListener("error", reject)
    })
}

try{
    const no1 = preLoadImage()
    const no2 = preLoadImg()
    const no3 = preLoadRandom()
    const result = await Promise.all([no1, no2, no3])
}catch(err){
    console.log(err)
}