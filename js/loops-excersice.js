// Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

// const showMultiplicationTable = () =>{
//     for (i = 1; i <= 40; i *= 4){
//         console.log(i)
//     }}
// showMultiplicationTable()

// const multiply10 = () =>{
//     for (i = 1; i <= 10; i++){
//         const num = 7
//         const message = `${num} x ${i}`
//         console.log((message) i * 7)
//
//     }}
// multiply10();
//
// const showMultiplicationTable =() => {
//     for (i = 1; i <=300; i++){
//         console.log(i * 2)
// }}
// showMultiplicationTable()
//
// const multoppy7 = () =>{
//     for (i = 1; i <=100; i++){
//         console.log(i * 7)
//     }
//
// }
// multoppy7()

// Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even. For example:

// const randomNumbergen = (i) =>{
//     for(i = Math.floor(Math.random() * 200) + 20; i % 2==0; i)
//     {if(true)
//             return "even"
//     else "Odd"
//         result = i
//         return result
// }
// }
//
// console.log(randomNumbergen())
//
// for (let i = 0; i < 10; i++) {
//     // Generate a random number between 20 and 200
//     const randomNumber = Math.floor(Math.random() * (200)) + 20;
//
//     // Check if the number is even or odd
//     const isEven = randomNumber % 2 === 0;
//
//     // Output the result
//     if (isEven) {
//         console.log(`${randomNumber} is even.`);
//     } else {
//         console.log(`${randomNumber} is odd.`);
//     }
// }

// Create a for loop that uses console.log to create the output shown below.
//
// 	let result = "";
// 	for (let i = 0; i < num; i++) {
// 		result += "*";
// 	}
// result += "\n";
// return result
// };
//
// const buildPyramid = (rows) => {
// 	let result = "";
//     buildRow =
// 	// first loop
// 	for (let i = 1; i <= rows; i++) {
// 		result += buildRow(i);
// 	}
// 	return result;
// };
//
// let pyramid = buildPyramid(5);
// console.log(pyramid);
// const buildRow = (num) => {
//     let output = '';
//     for (let i = 1; i <= num; i++) {
//         output += num;
//     }
//     return output;
// }
// function generatePyramid() {
//     let totalNumberofRows = 9;
//     for (let i = 1; i <= totalNumberofRows; i++) {
//         let output = buildRow(i);
//         console.log(output);
//     }
// }

// generatePyramid();


// Create a for loop that uses console.log to create the output shown below.

// for (i = 100; i >= 5; i -= 5){
//     console.log(i)
// }

// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50.
//     Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50,
//     except for the number the user entered.
//     Your output should look like this:

// let numberPicked = prompt("pick a number between 1 and 50")
// let l = 5
//  for (i = numberPicked; i <=50; i++){
//      // console.log(i);
//      if (i == l){
//          console.log("please pick a different number")
//          continue;
//      }
//      if(i %2 != 0) {
//          console.log(i)
//      }
//  }





// Create a while loop that uses console.log() to create the output shown below.
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536


// const mutiplybyitself = (num)=>{
//     for (i=2; i <=16; i++){
//         let multiply = (i * i)
//         let finalnmber = multiply * multiply
//         console.log(finalnmber)
//     }
// }
// mutiplybyitself()




// let pyramid = buildPyramid(5);
// console.log(pyramid);
// const buildRow = (num) => {
//     let output = '';
//     for (let i = 1; i <= num; i++) {
//         output += num;
//     }
//     return output;
// }
// function generatePyramid() {
//     let totalNumberofRows = 9;
//     for (let i = 1; i <= totalNumberofRows; i++) {
//         let output = buildRow(i);
//         console.log(output);
//     }
// }
// generatePyramid()
//
//not the right method
// const buildAnother =(num) =>{
//     let output = ``;
//     for (let i = 1; i <=num; i++){
//         output += num
//     }
//     return output
// }
//
// function generateNUmpri(){
//     let row = 16
// for(i = 2; i <=row; i++){
// let output = buildAnother(i)
//     console.log(output)
// }}
// generateNUmpri()




// An ice cream seller can't go home until she sells all of her cones. ' +
// 'First write enough code that generates a random number between 50 and 100 representing the' +
// ' amount of cones to sell' +
// ' before you start your loop. ' +
// 'Inside of the loop your code should generate another random number between 1 and 5, simulating ' +
// 'the amount of cones being bought by her clients. Use a do-while loop to log to the console ' +
// 'the amount of cones sold to each person. The below code shows how to get the random numbers for ' +
// 'this exercise.


// let ranNum =  Math.floor(Math.random() * (100 - 50 + 1) + 50)
//
// let NumOfConesboughtByCus = Math.floor(Math.random() * (5 - 1 + 1) + 1)
// let people = 5
//
// const needToSell = (ranNum) =>{
//  do {(ranNum - NumOfConesboughtByCus);{
//      if( ranNum > NumOfConesboughtByCus)
//          console.log("not enough cones")
//  while (ranNum = 0)
//     console.log("all cones sold")
// }}
// needToSell()

//
//
//
// // Generate a random number of cones to sell between 50 and 100
// const totalConesToSell = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
//
// console.log(`The ice cream seller needs to sell ${totalConesToSell} cones.`);
//
// let conesSold = 0;
//
// do {
//     // Generate a random number of cones bought by a client between 1 and 5
//     const conesBought = Math.floor(Math.random() * 5) + 1;
//
//     if (conesBought <= totalConesToSell - conesSold) {
//         conesSold += conesBought;
//         console.log(`${conesBought} cone(s) sold. ${totalConesToSell - conesSold} cone(s) remaining.`);
//     } else {
//         console.log(`Sorry, we don't have enough cones. Only ${totalConesToSell - conesSold} cone(s) left.`);
//     }
//
// } while (conesSold < totalConesToSell);
//
// console.log("All cones have been sold. The ice cream seller can go home now.");
//
// totalConesToSell