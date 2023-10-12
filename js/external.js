
// alert(` Welcome to my Website!`);
//
// let favcol = prompt(` what is your favorite color?`)
//
// alert( `${favcol} Is my favorite color too`)
//
//
//
//
//
// const littleMermaidDays = 3;
// let lilmerprom = prompt(`how many day did you rent out littleMermaid?`)
// alert(`${lilmerprom} == ${littleMermaidDays}`)
// const botherBearDays = 5;
// let BBprom = prompt( `how many days did you rent out brotherbear?`)
// alert(`${BBprom} is correct the rgiht answer is ${botherBearDays}`)
// const HerculesDays = 1;
// let herprom = prompt(` how many days did you rent of Hercules?`)
// alert(` ${herprom} is corrrect the right answer is ${HerculesDays}`)
//
// let pricePerDay = 3;
// let movies = lilmerprom + BBprom + herprom;
// let totco = pricePerDay * movies;
//
// alert(`your total amount is ${totco}`)
//
// const litttleMermaidCost  = littleMermaidDays * pricePerDay
// const botherBearCost = botherBearDays * pricePerDay
// const Heculescost = HerculesDays * pricePerDay
//
// let totalcost = Heculescost + botherBearCost + litttleMermaidCost;
// totalcost = `$${totalcost.toFixed(2)};`
//
// let answerformov = prompt(`how much total was the cost of all movies?`)
// alert(`Your answer was ${answerformov} the correct answer should be ${totalcost}`)
//
// console.log(totalcost);
//
//
//
// const googlePerHour = 400
//
// let gogprom = prompt(`how many hours did you work for google?`)
// alert(`your total pay is $${googlePerHour * gogprom}`)
//
//
//
//
// const facebookPerHour =350
//
// let faceprom = prompt(`how much does facebook pay per hour?`)
//
// alert(`${faceprom} ithe correct answer is ${facebookPerHour}`)
//
//
//
// const amazonPerHour = 380
//
// let amaprom = prompt(`hoiw mcuh does Amazon pay per hour?`)
//
// alert(`${amaprom} the correct answer is ${amazonPerHour}`)
//
//
//
// const googleHoursWorked = 6
//
// let goghorworpom = prompt(`how many hours did you work for google`)
//
// alert(`${goghorworpom} is the correct answer ${googleHoursWorked}`)
//
//
//
// const facebookHoursWork = 10
//
// let facehorworkpro = prompt(` how many hours did you work for Facebook`)
//
// alert(`${facehorworkpro} should match ${facebookHoursWork}`)
//
//
//
// const amazonHoursWorked = 4
//
// let amahourworprom = prompt(`how many hours did you work for Amazon`)
//
// alert(`${amahourworprom} should match ${amazonHoursWorked}`)
//
//
//
//
//
//
//
// let googlePay = googlePerHour * googleHoursWorked
// let facebookPay = facebookPerHour * facebookHoursWork
// let amazonpay = amazonPerHour * amazonHoursWorked
// let totalpay = googlePay + facebookPay + amazonpay
// console.log(`total pay was: $${totalpay.toFixed(2)}`)
//
// let totalpayfromwork = prompt(` how many monies have you earned`)
// alert(` ${totalpayfromwork} minus on billion dallors for tax. thank you bye. $${totalpay.toFixed(2)}`)
//
//







// Use the alert function to show a message that says 'Welcome to my Website!'.
//
//     Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//
//     For example, if the user enters "blue", your code should alert a message that says:
//
//     "Great, blue is my favorite color too!"
//
// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.
//     Finally, commit the changes to your git repository, and push to GitHub.


//cost of shoes

const custmore = (name) =>{
    return `${name}`
}
const sayname = custmore("mark")

let Airforceone = 43

let a = prompt(`How many pairs Airforce Ones did you buy`)

let Nike = 140

let b = prompt(`How many pairs of Nikes did you buy?`)

let NB = 101

let c = prompt(`How many pairs of NewBalances did you buy?`)

let p = a *Airforceone
let q = b * Nike
let x = c * NB

let dollarUSLocale = Intl.NumberFormat('en-US');

let qw = p + q + x;

let i =1000

alert(`${sayname}'s total balance is $${dollarUSLocale.format(qw)}`)

let t = qw >= i

console.log(t)

