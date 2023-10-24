//
// // //
// // // if(x== 4) {
// // //     console.log("this is the numbe 4")
// // // }else if (x == 5){
// // //     console.log("this number is 5")
// // // }else console.log("not a good number")
// //
// //
// // const creatDog =(name, gender, breed, weight, color, altered) =>{
// //     let result = {
// //         name,
// //         gender,
// //         breed,
// //         weight,
// //         color,
// //         altered,
// //         bark: function (){
// //             console.log(`${this.name}, a ${this.breed}, barked.`)
// //         },
// //     };
// //     return result;
// // };
// // class dog {
// //     constructor(name, breed, weight, color, alter) {
// //         this.name = name
// //         this.gender = gender
// //         this.breed = breed
// //         this.weight = weight
// //         this.color = color
// //         this.alter = alter
// //     }
// //     bark(){
// //         console.log(`${this.name}, fethced the ball`)
// //     }
// // }
// //
// // class  Bulldog extends dog {
// //     constructor(name, gender, breed, weight, color, alter) {
// //         super(name, gender, breed, weight, color, alter);
// //     }
// //
// //     bark() {
// //         console.log(`${this.name}, a ${this.breed}, snuffle growls and boogers popped out.`);
// //     }
// // }
// // creatDog()
// //
// //
// // const createcar = (make, model, type, topspeed) => {
// //     let result = {
// //         make,
// //         model,
// //         type,
// //         topspeed,
// //         drive: function (){
// //         console.log(`your car is a ${make} ${model} ${type} with a top speed of ${topspeed}`)
// //     },
// // };
// // return result;
// // };
// //
// // class car1 {
// //     constructor(make, model, type, topspeed) {
// //         this.make = make;
// //         this.moder = model;
// //         this.type = type;
// //         this.topspeed = topspeed;
// //     }
// // }
//
// //
// // "use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
// //
// // const sayHello = (name) => {
// //     return `hello ${name}`
// // }
// // console.log(sayHello("mark"))
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
// // const sayhito = "mark"
// // console.log(sayHello(sayhito))
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//
// // const sayhi = sayHello("mark")
// // console.log(sayhi)
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// // const random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
// // const isTwo = (number) =>{
// //     let beTwo = (number == 2)
// //     return beTwo
// // }
// // console.log(isTwo(random))
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// // let theBill = parseFloat(prompt('what was your total bill'))
// // let tip = parseFloat(prompt("how much would you like to tip?"))
// //
// // // let tip = .2
// // // let theBill = 100
// // const bill =( tip, totalbill) =>{
// //   const tipAmount = totalbill * tip
// //     alert(tipAmount)
// //     return  "your total is " + (tipAmount + totalbill)
// // }
// // console.log(bill(tip, theBill))
//
//
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
// // let theBill = prompt('what was your total bill')
// // let tip = prompt("how much would you like to tip?")
//
// //referance above
//
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > let originalPrice = 100;
//  * > let discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
//
//
//
// // const randiscount = (pplaceholder) =>{
// //     if(pplaceholder == 2){
// //         return .20
// //     }
// //     else if (pplaceholder == 3){
// //         return .30
// //     }
// //     else {
// //         return .10
// //     }
// // }
// // randiscount(random)
// //
// // let Pricet = 100
// // let disscount = randiscount(random)
// // const applyDiscount =(price, discount) =>{
// //     const total = Pricet - (Pricet * disscount)
// //
// //     return total
// // }
// // console.log(applyDiscount())
//
//
// ///////////////////
//
//
//
// // "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
// // let mycolor = "fvnekjd"
// // const analyzeColor = (color) =>{
// //     if(color === "blue") {
// //         return "i like the color to"
// //     }
// //     else if (color === "red"){
// //         return "nice color"
// //     }else {
// //         return "ok"
// //     }
// // }
//
// // console.log(analyzeColor(mycolor))
//
//
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// // const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // const randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
// // console.log(analyzeColor(randomColor))
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
// // let promptedcolor = prompt("what is your favorite color")
// // let mycolor = "red"
// // const analyzeColor = (color) => {
// //     switch (color) {
// //
// // case
// //     "red":
// //     console.log("cool")
// //     break;
// //         case "blue":
// //     console.log("nice")
// // break
// //
// // }
// // }
// // analyzeColor(promptedcolor)
//
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// /* ########################################################################## */
//
// //reference above
//
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
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// // const luckyNumber = Math.floor(Math.random() * 5) + 1;
// //
// // let orginalprice = prompt("what is your total bill")
// // alert(`your lucky number is ${luckyNumber}`)
// //
// //
// // const calculatedTotal = (discount) =>{
// //     switch (discount){
// //         case 0:
// //             console.log(`your original price was ${orginalprice} your this new dicounted price is ${orginalprice} no discoint`)
// //             break;
// //         case 1:
// //             console.log(`your original price was ${orginalprice} your this new dicounted price at 10 percent off!!!${orginalprice - (orginalprice * .10)} `)
// //             break;
// //         case 2:
// //             console.log(`your original price was ${orginalprice} your this new dicounted price at 20 percent off!!!${orginalprice - (orginalprice * .20)} `)
// //        break;
// //         case 3:
// //             console.log(`your original price was ${orginalprice} your this new dicounted price at 35 percent off!!!${orginalprice - (orginalprice * .35)} `)
// //         break;
// //         case 4:
// //             console.log(`your original price was ${orginalprice} your this new dicounted price at 45 percent off!!! ${orginalprice - (orginalprice * .45)} `)
// //             break;
// //         case 5:
// //             console.log(`your original price was ${orginalprice} your this new dicounted price is $0 at 100 percent off!! `)
// //     }
// // }
// // calculatedTotal(luckyNumber)
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// // const luckyNumber = Math.floor(Math.random() * 6);
//
//
//
// ////refer to prevouis
//
//
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
//
// // const numberPicked = (number) => {
// //
// //
// //
// // }
// // const Pickme = () =>{
// //     let numberpick = prompt("pick a number between 1 and 3")
// // else if (numberPicked %2 == 0 && numberPicked > 0)
// //     return; "your number is odd and postive"
// // }else {
// //     return;" Your number is even"
// // }
// //
// //
// //
// // const confirmButton = (numb) =>{
// //     if(confirm("would you like to pick a number?")){
// //
// //
// //         }
// //     }
// // Ask the user if they want to enter a number
// // if (confirm("Would you like to enter a number?")) {
// //     // Prompt the user for a number
// //     const userInput = prompt("Please enter a number:");
// //
// //     // Check if the user entered a number
// //     if (!isNaN(userInput) && !isNaN(parseFloat(userInput))) {
// //         const number = parseFloat(userInput);
// //
// //         // Check if the number is even or odd
// //         if (number % 2 === 0) {
// //             alert("The number is even.");
// //         } else {
// //             alert("The number is odd.");
// //         }
// //
// //         // Calculate and display the number plus 100
// //         const numberPlus100 = number + 100;
// //         alert(`The number plus 100 is: ${numberPlus100}`);
// //
// //         // Check if the number is negative or positive
// //         if (number < 0) {
// //             alert("The number is negative.");
// //         } else if (number > 0) {
// //             alert("The number is positive.");
// //         } else {
// //             alert("The number is zero.");
// //         }
// //     } else {
// //         // Inform the user of incorrect input data type
// //         alert("Invalid input. Please enter a valid number.");
// //     }
// // } else {
// //     // User clicked 'Cancel' in the confirm dialog
// //     alert("You chose not to enter a number.");
// // }
//
//
// // if (confirm("would you like to sell you car?")){
// //     const thePrice = prompt("how much would you like to sell your car for?")
// // //how do i write a function that will only accept a number
// //         if
// //         (thePrice > 10000){
// //     alert("to expensive!!!")
// // }
// // else{
// //     alert("ok i buy now")
// // }}
//
// //////loops
//
// // for (let i = 0; i < 10; i++){
// //     console.log(i)
// // }
// //
// // let index = 0;
// // while (index < 10) {
// // 	console.log(`The code ran at index ${index}`);
// // 	index++;
// // }
//
// //
// // let i = 1
// // while(i < 65536){
// //     i = i * 2
// //     console.log(i)
// //
// // }
// //
// // let j = 1
// // while (j < 655441){
// //     j = j * 3
// //     console.log(j)
// // }
//
// // //// why does infinit loop when i do i - 5 but not for i -=5
// // for(let i = 100; i >= 5; i -=5){
// // //     console.log(i)
// // }
// //
// // (function(){
// //     "use strict";
// //
// //     /**
// //      * TODO:
// //      * Create an array of 4 people's names and store it in a variable called
// //      * 'names'.
// //      */
// //
// //     const names = [
// //         "john",
// //         "tom",
// //         "mary",
// //         "walter"
// //     ];
// //     console.log(names)
// //
// //
// //
// //     /**
// //      * TODO:
// //      * Create a log statement that will log the number of elements in the names
// //      * array.
// //      */
// //
// //
// //     console.log(names.length)
// //
// //
// //
// //     /**
// //      * TODO:
// //      * Create log statements that will print each of the names individually by
// //      * accessing each element's index.
// //      */
// //
// //
// //     console.log(names[0])
// //     console.log(names[1])
// //     console.log(names[2])
// //     console.log(names[3])
// //     console.log(names[4])
// //
// //
// //     /**
// //      * TODO:
// //      * Write some code that uses a for loop to log every item in the names
// //      * array.
// //      */
// // for(let i = 0; i < names.length; i++){
// //     console.log(names[i])
// // }
// // ///what function am i suppous to put in to match top example
// // // names.forEach()
// //
// //
// //     /**
// //      * TODO:
// //      * Refactor your above code to use a `forEach` loop
// //      */
// //
// //     names.forEach((n, i ,) =>    {
// //         console.log(n, i,)
// //     })
// //
// //
// //     /**
// //      * TODO:
// //      * Create the following three functions, each will accept an array and
// //      * return an an element from it
// //      * - first: returns the first item in the array
// //      * - second: returns the second item in the array
// //      * - last: returns the last item in the array
// //      *
// //      * Example:
// //      *  > first([1, 2, 3, 4, 5]) // returns 1
// //      *  > second([1, 2, 3, 4, 5]) // returns 2
// //      *  > last([1, 2, 3, 4, 5]) // return 5
// //      */
// //
// //     console.log(names[0])
// //     console.log(names[1])
// //     console.log(names.length[-1])
// //
// //
// // })();
//
//
//     (function() {
//         "use strict";
//
//         /**
//          * TODO:
//          * Create an object with firstName and lastName properties that are strings
//          * with your first and last name. Store this object in a variable named
//          * `person`.
//          *
//          * Example:
//          *  > console.log(person.firstName) // "Rick"
//          *  > console.log(person.lastName) // "Sanchez"
//          */
//
//         // const name = {
//         //     firstname: "Marquis",
//         //     lastName: "Thomas"
//         // }
//         //
//         // console.log(name)
//
//         /**
//          * TODO:
//          * Add a sayHello method to the person object that returns a greeting using
//          * the firstName and lastName properties.
//          * console.log the returned message to check your work
//          *
//          * Example
//          * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//          */
//
//
//
//         // console.log(`hello ${name.firstname}`)
//
//
//         /** TODO:
//          * HEB has an offer for the shoppers that buy products amounting to
//          * more than $200. If a shopper spends more than $200, they get a 12%
//          * discount. Write a JS program, using conditionals, that logs to the
//          * browser, how much Ryan, Cameron and George need to pay. We know that
//          * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//          * display a line with the name of the person, the amount before the
//          * discount, the discount, if any, and the amount after the discount.
//          *
//          * Uncomment the lines below to create an array of objects where each object
//          * represents one shopper. Use a foreach loop to iterate through the array,
//          * and console.log the relevant messages for each person
//          */
//
//         // var shoppers = [
//         //     {name: 'Cameron', amount: 180},
//         //     {name: 'Ryan', amount: 250},
//         //     {name: 'George', amount: 320}
//         // ];
//
//         /** TODO:
//          * Create an array of objects that represent books and store it in a
//          * variable named `books`. Each object should have a title and an author
//          * property. The author property should be an object with properties
//          * `firstName` and `lastName`. Be creative and add at least 5 books to the
//          * array
//          *
//          * Example:
//          * > console.log(books[0].title) // "The Salmon of Doubt"
//          * > console.log(books[0].author.firstName) // "Douglas"
//          * > console.log(books[0].author.lastName) // "Adams"
//          */
//
//         // const books = [catAndtheHat, theWalkingDead, Naruto]{
//         //
//         // }
//
//
//
//
//         /**
//          * TODO:
//          * Loop through the books array and output the following information about
//          * each book:
//          * - the book number (use the index of the book in the array)
//          * - the book title
//          * - author's full name (first name + last name)
//          *
//          * Example Console Output:
//          *
//          *      Book # 1
//          *      Title: The Salmon of Doubt
//          *      Author: Douglas Adams
//          *      ---
//          *      Book # 2
//          *      Title: Walkaway
//          *      Author: Cory Doctorow
//          *      ---
//          *      Book # 3
//          *      Title: A Brief History of Time
//          *      Author: Stephen Hawking
//          *      ---
//          *      ...
//          */
//
//         /**
//          * Bonus:
//          * - Create a function named `createBook` that accepts a title and author
//          *   name and returns a book object with the properties described
//          *   previously. Refactor your code that creates the books array to instead
//          *   use your function.
//          * - Create a function named `showBookInfo` that accepts a book object and
//          *   outputs the information described above. Refactor your loop to use your
//          *   `showBookInfo` function.
//          */
// //
// //     })();
// // }
// //
// // // Generate a random number between 1 and 100 (inclusive)
// // const targetNumber = Math.floor(Math.random() * 100) + 1;
// //
// // // Initialize the number of attempts
// // let attempts = 0;
// //
// // // Function to handle the user's guess
// //
// //
// // const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
// //
// //
// //
// // function checkGuess() {
// //     if  (userGuess > targetNumber){
// //         return console.log("higher to high!!!")
// //     } else if (userGuess < targetNumber)
// //     {
// //       return console.log("NUmber to low!!!")
// //     }else if (userGuess === targetNumber){
// //         return console.log("thats the lucky number!! you win")
// //     }else if (isNaN(userGuess)){
// //         return console.log("Please enter a vaild number")
// //         userGuess
// //     }else console.log("aahhhooo")
// //
// //     for(let i = 0; i < numberOfattempts; i++){
// //         let today = new Date
// //         console.log(today(i))
// //     }
// //
// // checkGuess()
// //     // Get the user's guess from the input field
// //
// //
// //     // Check if the guess is valid
// //
// //     // Increment the number of attempts
// //
// //     // Check if the guess is correct
// //     // if true, display a winning message
// //
// //     // if false, provide a hint and call checkGuess() again
// // }
// //
// // // Start the game
// // checkGuess();

// const largestNumber =(num1 , num2) => {
//     if(isNaN(num1) || isNaN(num2)) {
//         return "not a vaild input"
//     }if(num1 > num2){
//         return num1
//     }else if (num2 > num1){
//         return num2
//     }else {
//         return false
//     }
//         }
//
// console.log(largestNumber(70, 79))
//
//
// let nums =[0, -1, 4]
// console.log(nums.sort())


// function findHighestNumber(arr) {
//     if (arr.length === 0) {
//         return undefined; // Return undefined for an empty array
//     }
//
//     let highest = arr[0]; // Initialize the highest with the first element
//
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > highest) {
//             highest = arr[i]; // Update the highest if a higher number is found
//         }
//     }

//     return highest;
// }
//
// const arr = [-2, -6, 0, -1, -5];
// const highestNumber = findHighestNumber(arr);
// console.log("The highest number is:", highestNumber);
//
//
//
//
//
// const highNum = (num) => {
//     let Numnum = num[0];
//     for (let i = 1; i < num.length; i++) {
//         if (num[i] > Numnum) {
//             Numnum = num[i]
//         }
//     }
//     return Numnum
// }
//     const arry =[ 2, -6, 0, -1, -5]
//     const HighNumber = highNum(arry)
//     console.log(HighNumber)

// const evenorodd = (start, end) =>{
//         for(i = 0; i <= 15; i++){
//             if(i % 2 === 0){
//                 console.log(`${i} is even`)
//             }else console.log(`${i} is odd`)
//         }
//     }
//
//
// console.log(evenorodd(0, 15))

// const revrsnumb = (numb)=>{
//     let splitnum = numb.split(``)
//     let revr = splitnum.reverse()
//     let joinnumb = revr.join("")
//     return joinnumb
// }
//
// console.log(revrsnumb("32243"))

const revinshort =(n) =>{
    n = n + "";
    return n.split(``).reverse(``).join(``);

}
console.log(revinshort(56789))


const palidrone = (name)=>{
    if(!isNaN(name)){
        return false
    }
    let pally = name.split(``).reverse(``).join(``)
    if(pally === name){
        return true
    }else
        return "not a palidron"
}
console.log(palidrone(4534))

const alphabetOder = (nm)=>{
    return nm.split(``).sort().join(``);
}

console.log(alphabetOder("jnfvuenau1nrne5sadwoe"))







