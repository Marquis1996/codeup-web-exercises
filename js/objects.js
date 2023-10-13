

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.*/
    //
    const person = {
        firstname: "Marquis",
        lastname: "Thomas",
        sayHello: function () {
            console.log((`Hello from ${this.firstname} ${this.lastname}`))
        }
    }

    console.log(person.firstname)
    console.log(person.lastname)
    person.sayHello()


    /*
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    // const person = {
    //     firstname: "Marquis",
    //     lastname: "Thomas",
    //     sayHello: function () {
    //         console.log((`Hello from ${this.firstname} ${this.lastname}`))
    //     }
    // }
    //
    // console.log(person.firstname)
    // console.log(person.lastname)
    // person.sayHello()
    //

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}]


    // let discount = (1 - .12)

    //     const discountover200 = (name, arrayOfObjects) => {
    //     for (i = 0; i < arrayOfObjects.length; i++){
    //         console.log(arrayOfObjects[i].amount);}
    //     if (shoppers.amount > 200){
    //         result = [i].amount * discount
    //         return console.log(name[i].name`your orignial price was` (arrayOfObjects[i].amount) `your discount price is` (result));
    //     } else {console.log("not enough spent")}
    // }
    // discountover200(shoppers)


    shoppers.forEach(shoppers => {
        const {name, amount} = shoppers;
        let dicount = 0
        if(amount > 200){
            discount = 12
        }
        let discountAmount = amount * (discount / 100)
        let discounttoatl = amount- discountAmount
        let message = `${name}: yout original total is ${amount}, your discount is ${discount} after yout discount your total is ${discounttoatl}`
        console.log(message)
    })



    //
    // const shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // const amtForDisc = 200
    // const discPercnt = 12
    //
    //
    //
    // shoppers.forEach(shopper => {
    //     const name = shopper.name;
    //     const amountSpent = shopper.amount;
    //     let discount = 0;
    //     let amountAfterDiscount = amountSpent;
    //
    //     if (amountSpent > amtForDisc) {
    //         discount = (amountSpent * discPercnt) / 100;
    //         amountAfterDiscount = amountSpent - discount;
    //     }
    //     console.log(`${name} spent ${amountAfterDiscount}`)
    //
    // });











    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     */
         Book # 1
         Title: The Salmon of Doubt
          Author: Douglas Adams
          ---
              Book # 2
          Title: Walkaway
          Author: Cory Doctorow
          ---
          Book # 3
          Title: A Brief History of Time
          Author: Stephen Hawking
    ---
          ...


    for(let book of books){
        const i = books.indexOf(book)
        const{title} = book;
        const (firstName, lastName) = book.author
        let message = `${i + 1}`
    }

    console.log()






    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

