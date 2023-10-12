





// const isCoding = (userFullName) =>
//     console.log(`${userFullName} Loves coding`);
//
//
// isCoding("Marquis");
// //
//
//
// const sayHello = (userFullName) => {
// return `Hello ${userFullName}`
// };
//
// const greeting = sayHello(`Mark`);
//
//
// console.log(greeting)


// const hi = (name) => {
//     return `${name} is the goat`
// };
//
// // const greeting = hi("lebron");
// //
// // console.log(greeting)
// //
// //
// // // const papajohns = (name, activiy) => {
// // //     return `${name}, sometimes ${activiy} on the weekends`;
// // // }
// // // const greet = papajohns("mark", "hates golf");
// // //
// // // console.log(greet)
// //
// // const tip = (name, name2, amount) => {
// //     return `${name} owes the cashier ${name2} a total of $${amount}`
// // }
// // const pay = tip ("mark", "mary", "400")
// //
// // console.log(pay)
// //
// // const custmore = (name) =>{
// //     return `${name}`
// // }
// // const sayname = custmore("mark")
//
//
//
//
//
//
// // const  sayHello = (userName) => {
// //     return `hello`, ${userName}``
// // }
//
//
//
//
//  //
//  // * TODO:
//  // * Create a function called 'sayHello' that takes a parameter 'name'.
//  // * When called, the function should return a message that says hello to the passed in name.
//
//
// const sayHello = (name) =>{
//     return `hello, ${name}`
// }
// console.log(`hello ${name}`);
//
//
// //  * Example
// //  * > sayHello("codeup") // returns "Hello, codeup!"
// //  */
// //
// //
// //  * TODO:
// //  * Call the function 'sayHello' and pass your name as a string literal argument.
// //  * Store the result of the function call in a variable named 'helloMessage'.
// //  *
// //  * console.log 'helloMessage' to check your work
//
//
// const hellomessage = sayHello("mark")
//
//
// let myName = "mark"
// let helloMessage = sayHello(myName)
// console.log(helloMessage)
//
// //  * TODO:
// //  * Store your name as a string in a variable named 'myName', and pass that
// //  * variable to the 'sayHello' function. You should see the same output in the
//
// //  * console.
//
//
// //  */
// //
// // // Don't modify the following line, it generates a random number between 1 and 3
// // // and stores it in a variable named random
// const random = Math.floor((Math.random() * 3) + 1);
//
// //
// //
// //
// //
// //
// //
// //
//
// // *
//
// //  * TODO:
// //  * Create a function called 'isTwo' that takes a number as a parameter.
// //  * The function should return a boolean value based on whether or not the passed
// //  * number is the number 2.
// //
//
//
//
//
// const isTwo = (number) =>{
//     console.log(number == 2)
//     return number == 2
// }
// isTwo(2)
// // console.log(isTwo(3));
// //
// //  *
// //  * Example
// //  * > isTwo(1) // returns false
// //  * > isTwo(2) // returns true
// //  * > isTwo(3) // returns false
// //  *
// //  * Call the function 'isTwo' passing the variable 'random' as a argument.
// //  *
// //  * console.log *outside of the function* to check your work (you should see a
// //  * different result everytime you refresh the page if you are using the random
// //  * number)
//
// console.log(isTwo(random));
//
//
// //  */
// //
// // /**
// //  * TODO:
// //  * Create a function named 'calculateTip' to calculate a tip on a bill at a
// //  * restaurant. The function should accept a tip percentage and the total of the
// //  * bill, and return the amount to tip
//
// let tipper = .50
// let billeq = 30
// const calculateTip = (tip, bill) =>{
//     return tip * tipper
// }
// console.log(calculateTip(billeg));
//
//
// //  *
// //  * Examples:
// //  * > calculateTip(0.20, 20) // returns 4
// //  * > calculateTip(0.25, 25.50) // returns 6.375
// //  * > calculateTip(0.15, 33.42) // returns 5.013
// //  */
// //
// // /**
// //  * TODO:
// //  * Use prompt and alert in combination with your calculateTip function to
// //  * prompt the user for the bill total and a percentage they would like to tip,
// //  * then display the dollar amount they should tip
//
//
//
// let y = parseFloat(prompt("Tip percentage?"))
// let b = parseInt(prompt("how much was your bill?"))
// let tt= parseInt(y) * parseInt(b)
// let finalpay = (parseInt(tt) + parseInt(b)).toFixed(2);
//
//
// alert(`final bill $${finalpay}` )
//
// //  */
// //
// // /**
// //  * TODO:
// //  * Create a function named `applyDiscount`. This function should accept a price
// //  * (before a discount is applied), and a discount percentage (a number between 0
// //  * and 1). It should return the result of applying the discount to the original
// //  * price.
//
//
// // let payamt = 500
// let discount = 40
// const applyDiscount = (totalBill) =>{
//     return huh
// }
// console.log(applyDiscount(huh))
//
// let huh = finalpay - discount

//  *
//  * Example:
//  * > let originalPrice = 100;
//  * > let discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */


// Here are some extra practice exercises for functions:
// ## Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that takes a number as input,
// representing a temperature in Celsius, and returns the equivalent temperature in Fahrenheit.

let fah = 34
const celsiusToFahrenheit = (temp) =>{
    return temp * 9/5 + 32
}
console.log(celsiusToFahrenheit(fah));


// ## Finding the Average
// Write a function average(a, b, c) that takes three numbers as arguments and returns their average.



// ## First Character
// Write a function firstChar(str) that returns the first character of a string.
//
// let word = "robert"
const fitstCharstr = (firstletter) => {
    return firstletter.charAt(0)
}
console.log(fitstCharstr("word"));
//
//
// // ## Last Character
// // Write a function lastChar(str) that returns the last character of a string.
// const lastCharstr = (firstletter) => {
//     return firstletter.charAt(5)
// }
// console.log(lastCharstr(word))



// ## Is Palindrome?
//     Write a function isPalindrome(str) that takes in a string and returns true if the string is a palindrome,
//     false otherwise.
//     A palindrome is a word that is spelled the same forwards and backwards i.e. racecar, mom, kayak.
//     To help, here is a function reverseString(str) that takes in a string and returns the reversed string.
//     You'll need to use it to solve isPalindrome.

let reverseSting(palword = "racecar"))
let oak = palword
const isPalindrome = (newword, revwordd) =>{
    return (newword) == (revwordd)
}
console.log(isPalindrome (palword, oak));
