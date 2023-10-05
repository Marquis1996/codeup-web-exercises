/*let a = 1;
console.log(a)
let b = a++
console.log(b)
let c = ++a
console.log(c)

let d = "hello"
console.log(d)
let e = false

let incrementE = ++e
console.log(incrementE)

let incrementD = d++;

console.log(incrementD);


e++;
console.log(e)


let perplexed;

let perplexed2 = perplexed + 2

console.log(perplexed2)

let price = "2.7";
let priceFixed = parseFloat(price).toFixed(2);
console.log(priceFixed)





console.log(isNaN(0))

console.log(isNaN(1))

console.log(isNaN(""))

console.log(isNaN("string"))

console.log(isNaN("0"))


console.log(isNaN("1"))

console.log(isNaN("3.145"))


console.log(isNaN(Infinity))

console.log(isNaN("true"))

console.log(isNaN(true))

console.log(isNaN("false"))

console.log(isNaN(false))




// to illustrate why the isNaN() function is needed:
NaN == NaN

console.log(!true)

console.log(!false)

console.log(!!true)

console.log(!!false)

console.log(!!0)

console.log(!!-0)

console.log(!!1)

console.log(!!-1)

console.log(!!0.1)

console.log(!!"hello")

console.log(!!"")

console.log(!!'')

console.log(!!"false")

console.log(!!"0")





let sample = "hello Codeup";
let samplelen = sample.length;
console.log (samplelen);

let uppercase = sample.toUpperCase();
console.log(uppercase);

let sampleNew = sample + " Students";
console.log(sampleNew);

let y = sample = sample.replace("Codeup", "Student");
console.log(` ${y}`);





let indexoflowercasec = sample.indexOf("c");

console.log(sample.indexOf("c"))

console.log(sample.substring(6, 13))*/





const littleMermaidDays = 3;
const botherBearDays = 5;
const HerculesDays = 1;

const pricePerDay = 3;

const litttleMermaidCost  = littleMermaidDays * pricePerDay
const botherBearCost = botherBearDays * pricePerDay
const Heculescost = HerculesDays * pricePerDay

let totalcost = Heculescost + botherBearCost + litttleMermaidCost;
totalcost = `$${totalcost.toFixed(2)};`

console.log(totalcost);



const googlePerHour = 400
const facebookPerHour =350
const amazonPerHour = 380

const googleHoursWorked = 6
    const facebookHoursWork = 10
const amazonHoursWorked = 4

let googlePay = googlePerHour * googleHoursWorked
let facebookPay = facebookPerHour * facebookHoursWork
let amazonpay = amazonPerHour * amazonHoursWorked
let totalpay = googlePay + facebookPay + amazonpay
console.log(`total pay was: $${totalpay.toFixed(2)}`)



const userName = `Codeup`
const password = `notastrongpassword`


//password must not be longer then 5 char
const is5char = password.length >= 5;

//password must not include the username
const passnotcontusername = !password.toLowerCase().includes(userName.toLowerCase());

const userLengthTooBig = userName.Length > 20

const usernameHasWhitespace = userName.trim() !== userName;
const passnoWhitespace = password.trim() !== password

const validPassword = is5char && passnotcontusername && passnoWhitespace;
const Validusername = userLengthTooBig && usernameHasWhitespace;

console.log(validPassword)
console.log(Validusername)









/*let TLM = 3
let BB =5
let H =1

console.log((TLM + BB + H) *3)

let GOG = 400
let AMZ = 380
let FAC = 350
console.log(GOG*6 + AMZ*4 + FAC*10)






let username = `codeup`;
let password = `notastrongpassword`;
let isPassShort = password.length <= 5;
console.log(isPassShort)
let userNameToLong = username.length < 20;
console.log(userNameToLong)

let passnot = username !== password
console.log(passnot)

let whitespace = username.includes(" ")

let Whtspace = password.includes(" ")
console.log(whitespace, Whtspace)


let r = 3
let rString = r.toString()
console.log(r.toString())




let x = 1
let h = x -= 2
console.log(h)*/

