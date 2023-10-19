



const fizzBuzz = (hi, bye) =>{
    if(typeof hi === "boolean" || typeof bye === "boolean"){
        return false
        }else if (isNaN(hi) || isNaN(bye)){
        return false
    }
    for(i =1 ; i <=100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz")

            }else if(i % 3 === 0){
            console.log("fizz")
            }else if(i % 5 === 0){
            console.log("buzz")
            }else{
            console.log(i)
        }
        }

}
console.log(fizzBuzz(1, 100))



//assessment practice
const isNumber =(input)=>{
    return true
}




