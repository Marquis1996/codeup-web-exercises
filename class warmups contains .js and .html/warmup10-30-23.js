// const digitalRoot = (n) => {
//     let splitnum = n.split("")
//     for (let i = 0; i > splitnum.length; i++) {
//         let concat = splitnum[i]++
//         let result = concat
//         return result
//     }
// }
//     console.log(digitalRoot(23784729))



// const digitalRoot = (n) =>{
//     let sum = 0
//     let p = n.split("")
//     {
//         while (sum <= p[i]){
//             sum += p[i];
//             i++
//         }
// return sum
//     }
// }
// console.log(digitalRoot(2842802))

const digitalRoot = (n) =>{
    let numArr = n.toString().split("");
    let result;
    while(numArr.length > 1){
        result = 0;
        for (let number of numArr){
            result += parseFloat(number);
        }
        numArr = result.toString().split("");
    }
    result = parseFloat(numArr.join)("");
    return result
}
console.log(digitalRoot(288439))
