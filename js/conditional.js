// const username = "merrellj"
//
//
// if (true) {
//
//     console.log("the condition is true")
// }
// else {
//     console.log("teh condition is false")
// }
//
// console.log("this is after the conditional statment");
// let isloggedIn = true
//
// let notloogin = false
// if(username){
//     console.log("loggedin");
// }else
//
//     console.log("not logged in");
//
//
//     const nmOfUser = 10000
//
//     if(nmOfUser >=10000){
//         console.log("thats too many users")
//     }
//         else if (nmOfUser >=200) {
//         console.log("that a lot of users")
//
//         }
//     else {
//         console.log("needs more users")
//     }
//
//
//     const isTwo = (number) => {
//         if (typeof  number !== "number") {
//             return false;
//         }
//         let result = number ==2
//         return result
//     }

//
// CONST CALCULATETIP = (tipPercentage, billTotal) => {
//     const istheTipbogos = isNaN(parseFloat(tipPercentage));
//     const istheTotalBogus = isNaN(parseFloat(billTotal));
//     if (istheTipbogos || istheTotalBogus) {
//         return "not a vaild tip"
//
//     }
// }

// const isLoggedin = true
//
// let message;
// if (isLoggedin) {
//     message = "welcome back!"}
//     else{
//          message = "please log in!";
//     }

// let message = / "welcome back" : "please log in!";
// console.log(message)
//
// let pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "cheese":
//         console.log("I love chesse pizza to!"  )
//         break;
//     case "hawaiiian":
//         console.log("I dig it")
//         break;
//     case "supreme":
//         console.log("me to")
//         break
//     case "pepperoni":
//         console.log("yes")
//         break
//     default:
//         console.log("what a weirdo")
//         break;
// }
//
// * TODO:
//     * Create a function named `analyzeColor` that accepts a string that is a color
// * name as input. This function should return a message which relates to the
// * color stated in the argument of the function. For colors you do not have
// * responses written for, return a string stating so
// *
// * Example:
// *  > analyzeColor('blue') // returns "blue is the color of the
// sky"
// *  > analyzeColor('red') // returns "Strawberries are red"



// *
// *
// *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
// *
// * You should use an if-else-if-else block to return different messages.
// *
// * Test your function by passing various string literals to it and
// * console.logging the function's return value
// */
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color
// value from the list (this
//
//     will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue',
//     'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random()
//     * colors.length)];

const analyzeColor = (name) =>{
    if (name == "blue"){

        console.log("cool!")}

    else if(name == "red"){
        {"apples are red"}

    }
    else if (name == "orange"){
        console.log("oranges are orange")
    }
    else if (name == "green") {
        console.log("grass is green")
    }
    else if (name = "yellow") {
        console.log("the sun is yellow")
    }
    else{
        console.log("color not vaild")
    }
}
let colorpicked = analyzeColor("green")


/**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
// const analyzeColor = (name) =>{
//     if (name == "blue"){
//
//         console.log("cool!")}
//
//     else if(name == "red"){
//         console.log("apples are red");
//     }
//     else if (name == "orange"){
//         console.log("oranges are orange")
//     }
//     else if (name == "green") {
//         console.log("grass is green")
//     }
//     else if (name == "yellow") {
//         console.log("the sun is yellow")
//     }
//     else{
//         console.log("color not vaild")
//     }
// }
// let colorpicked = analyzeColor("purple")


// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to
//  use a switch-case statement
//  */

const analyzeColor = (name) =>{
    switch(name){
        case "blue":
            console.log("blue is a cool color")
            break;
        case "red":
            console.log("I use the red cup alot")
            break;
        case "yellow":
            console.log("flowers are yellow")
            break;
        case "green":
            console.log("green is the clor of money")
            break;
    }}

let result = analyzeColor("green")

//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */


const analyzeColor = () =>
{
    switch(name){
        case "blue":
            console.log("blue is a cool color")
            break;
        case "red":
            console.log("I use the red cup alot")
            break;
        case "yellow":
            console.log("flowers are yellow")
            break;
        case "green":
            console.log("green is the clor of money")
            break;
    }
    {let coloredpicked = prompt("what is your favorite color")

    return analyzeColor(coloredpicked)
    }
}
analyzeColor()



// const analyzeColor = (name) =>{


//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *


//

let LN = Math.floor(Math.random() * 5)
let bill = prompt("how much is your bill?")

function calculateTotal(luckyNumber, totalAmount) {
    let discount = 0;

    switch (luckyNumber) {
        case 0:
            discount = 0;
            break;
        case 1:
            discount = 0.1; // 10% discount
            break;
        case 2:
            discount = 0.25; // 25% discount
            break;
        case 3:
            discount = 0.35; // 35% discount
            break;
        case 4:
            discount = 0.5; // 50% discount
            break;
        case 5:
            discount = 1; // 100% discount (free)
            break;
        default:
            console.log("Invalid lucky number");
            return totalAmount; // No discount for invalid lucky numbers
    }

    const discountedPrice = totalAmount * (1 - discount);
    return discountedPrice;
}

console.log(calculateTotal(LN, bill))


//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */

// Generate a random number between 0 and 6

const finalprice = () =>{

        const luckyNumber = Math.floor(Math.random() * 6);
        switch (luckyNumber) {
            case 0:
                discount = 0;
                break;
            case 1:
                discount = 0.1; // 10% discount
                break;
            case 2:
                discount = 0.25; // 25% discount
                break;
            case 3:
                discount = 0.35; // 35% discount
                break;
            case 4:
                discount = 0.5; // 50% discount
                break;
            case 5:
                discount = 1; // 100% discount (free)
                break;
        }
    let bill = prompt("what is your total")
    if (bill == NaN) {
        console.log("is NAN")
        return "not a vaild input"
    }
    let finalprice = (bill - luckyNumber)
    console.log(finalprice)
    return finalprice
    }

    finalprice();
// Function to calculate the total price after discount




// function calculateTotal(totalBill, discountPercentage) {
//     const discountAmount = (totalBill * discountPercentage) / 100;
//     const totalPrice = totalBill - discountAmount;
//     return totalPrice;
// }
//
// // Prompt the user for their total bill
// const userBill = parseFloat(prompt("Please enter your total bill:"));
//
// if (!isNaN(userBill)) {
//     const discountPercentage = luckyNumber * 5; // Assuming a 5% discount for each lucky number
//     const totalPriceBeforeDiscount = userBill;
//     const totalPriceAfterDiscount = calculateTotal(userBill, discountPercentage);
//
//     // Display the lucky number, price before discount, and price after discount
//     alert(`Your lucky number is: ${luckyNumber}\nPrice before discount: $${totalPriceBeforeDiscount.toFixed(2)}\nPrice after discount: $${totalPriceAfterDiscount.toFixed(2)}`);
// } else {
//     alert("Invalid input. Please enter a valid number for your total bill.");
// }




//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */