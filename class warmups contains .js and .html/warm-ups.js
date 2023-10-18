
const findlargest = (arr) => {
    let largestnum = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largestnum) {
            largestnum = arr[i]
        }
    }
    return largestnum;
}

const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];

const myLargestNumber = findlargest(numbers);

console.log(myLargestNumber)
//
// (() =>{
//
//     const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
//
//     const findLargestNumber =(arr)=> {
//         if (!Arry.isArry(arr) && arr.length === 0)
//             return false;
//     }
//     let largest = 0
//
// for( let number of arr){
//     if(number > largest){
//         largest = number
//     }
// return largest
// }
//
// const result= findLargestNumber()
//     console.log(result)
//
// })();


