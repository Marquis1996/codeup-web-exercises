


    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    const names =  ["marquis", "daivid", "mark", "lauren"]





    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);







    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0])
    console.log(names[1])
    console.log(names[2])
    console.log(names[3])


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
let NmOfname = names.length;

for (let i = 0; i < NmOfname; i++) {
    let name = names[i];
    console.log(name);
}



    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

names.forEach((name) =>{
        console.log(name)
    })



    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array


*/
  const firstpostion = (array) =>{
      return names[0]
  }
    console.log(firstpostion())


    const secondPosition = (arry) =>{
      return names[1]
    }
    console.log(secondPosition())

    const lastPostion = (arry) =>{
      return names[names.length -1]
    }
    console.log(lastPostion())


     // * Example:
     // *  > first([1, 2, 3, 4, 5]) // returns 1
     // *  > second([1, 2, 3, 4, 5]) // returns 2
     // *  > last([1, 2, 3, 4, 5]) // return 5
     // */
     //
