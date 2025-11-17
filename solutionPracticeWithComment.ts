export default {}
//! Problem 1:

//? Create a function formatValue that accepts a value which may be a string, number, or boolean, and returns the following based on the value type:
//? If the input is a string → return the string in uppercase
//? If the input is a number → return the number multiplied by 10
//? If the input is a boolean → return the opposite value (true → false, false → true)


//* solution No 1 =>
console.log()
console.log("Output of problem-1 =>")

type Value1 = string | number | boolean

const formatValue = (value : Value1)=> {
   if(typeof value === "string"){
        return value.toUpperCase()
   } else if ( typeof value === "number"){
       return value * 10
   } else if (typeof value === "boolean") {
    return !value
   } else {
    return `Value can't accept ${typeof value} -> this type`
   }
}
console.log(formatValue('hello')); //! output -> HELLO
console.log(formatValue(5)); //! output -> 50
console.log(formatValue(true)); //! output -> false
// console.log(formatValue(null)) //! output -> Value can't accept object -> this type





//! Problem 2:
//? Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.
//? If the input is a string → return the number of characters.
//? If the input is an array → return the number of elements.


//* solution No 2 =>
console.log()
console.log("Output of problem-2 =>")

type Value2 = string | Array<any>;

const getLength = (value: Value2) => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        return `Value can't accept ${typeof value} -> this type`
    }
};
console.log(getLength('typescript')); //! output -> 10
console.log(getLength([10, 20, 30, 40])); //! output -> 4
// console.log(getLength(false)) //! output -> 4  Value can't accept boolean -> this type




//! Problem 3:
//? Create a Person class with name and age properties. Add a method getDetails that returns a string with the person's name and age.


//* solution No 3 =>
console.log()
console.log("Output of problem-3 =>")

class Person {
    name: string;
    age: number;
    constructor( name: string ,  age : number){
        this.name = name; 
        this.age = age;  
    }
        getDetails(): string{
            if (this.name === ""  || this.age === 0 || !this.name || !this.age) {
                return "Name and age is required";
            }
             return `'Name: ${this.name}, Age: ${this.age}'`
        } 
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails()); //! output -> 'Name: John Doe, Age: 30'

const person2 = new Person('Alice', 25);
console.log(person2.getDetails()); //! output -> 'Name: Alice, Age: 25'

const person3 = new Person('Alice' , 0);
console.log(person3.getDetails()); //! output -> Name and age is required





//! Problem 4:
//? Create a function filterByRating that accepts an array of items, where each item has the following properties:
//? title (string)
//? rating (number between 0 and 5)
//? The function should return a new array containing only the items with a rating of 4 or more.


//* solution No 4 =>
console.log()
console.log("Output of problem-4 =>")

type TBook ={
    title: string ;
    rating: number
}

const filterByRating = (books: TBook[]): TBook[] | string => {
    for (const book of books) {
        if (book.rating < 0 || book.rating > 5) {
            return `Rating of book "${book.title}" must be between 0-5`;
        }
    }
    const filteredBooks = books.filter(book => book.rating >= 4);
     const sortedBooks = [...filteredBooks].sort((a, b) => a.rating - b.rating);
     if (sortedBooks.length === 0) {
         return "No book found";
     } else{
        return sortedBooks;
     } 
};
const books : TBook[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
  ];
console.log(filterByRating(books)); //! output -> [ { title: 'Book A', rating: 4.5 }, { title: 'Book C', rating: 5 } ]
const books2 = []
// console.log(filterByRating(books2));//! output -> No book found






//! Problem 5:
//? Create a function filterActiveUsers that accepts an array of user objects. Each user object contains id, name, email, and isActive properties. The function should return a new array containing only the users whose isActive property is true.


//* solution No 5 =>
console.log()
console.log("Output of problem-5 =>")

type TUser = {
    id: number ;
    name: string ;
    email: string ;
    isActive : boolean ;
}
const filterActiveUsers = (users: TUser[])=>{
     const activeUser = users.filter((user) => user?.isActive === true)
     return activeUser
}
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
  ];
console.log(filterActiveUsers(users)); //! output -> [ { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },{ id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true } ]






//! Problem 6:
//? Define an interface Book with the following properties:
//? title (string)
//? author (string)
//? publishedYear (number)
//? isAvailable (boolean)
//? Then, create a function printBookDetails that accepts an object of type Book and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".


//* solution No 6 =>
console.log()
console.log("Output of problem-6 =>")

interface Book {
    title : string ;
    author: string ;
    publishedYear: number ;
    isAvailable: boolean;
}

const printBookDetails = (book : Book)=> {
        console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable? "Yes" : "No"}`)
}
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
  }; 
printBookDetails(myBook); //! output -> Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes






//! Problem 7:
//? Create a function getUniqueValues that accepts two arrays and returns a new array containing only the unique values from both arrays, without any duplicates.
//? Requirements:
//? You must write the correct type for the function parameter and the return type.
//? The function should handle arrays of strings or numbers.
//? You are not allowed to use any built-in methods to solve this problem.


//* solution No 7 =>
console.log()
console.log("Output of problem-7 =>")

type TArr = (string | number)[]

const getUniqueValues = (arrOne : TArr , arrTwo: TArr): TArr=>{
     const newArr : TArr = []
     const addUnique = (arr: TArr) => {
        for (let i = 0; i < arr.length; i++) {
            let found = false;
            for (let j = 0; j < newArr.length; j++) {
                if (arr[i] === newArr[j]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                newArr.push(arr[i]);
            }
        }
    };
    addUnique(arrOne);
    addUnique(arrTwo);
     return newArr
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2)); //! output -> [1, 2, 3, 4, 5, 6, 7];






//! Problem 8:
//? Create a function calculateTotalPrice that accepts an array of product objects. Each product object contains the following properties:
//? name (string)
//? price (number)
//? quantity (number)
//? discount?: optional number from 0–100, representing a percentage discount
//? The function should return the total price of all products in the array, taking into account the discount for each product (if provided). If the array is empty, return 0.


//* solution No 8 =>
console.log()
console.log("Output of problem-8 =>")

type TProduct = {
    name : string ;
    price: number ;
    quantity: number ;
    discount? : number
}

const calculateTotalPrice = (products: TProduct[])=> {
    let totalPrice = 0
    if(products.length === 0){
        return 0
    }
    products.map((product)=> {
        if (product.discount !== undefined) {
            if (product.discount < 0 || product.discount > 100) {
                throw new Error("Discount must be between 0 and 100");
            }
            totalPrice = totalPrice +  (product.price * product.quantity) - ((product.price * product.quantity) * product.discount /100)
        } else{
            totalPrice += (product.price * product.quantity)
        }
    })
   return totalPrice  
}
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
  ];
console.log(calculateTotalPrice(products)); //! output -> 127.5
