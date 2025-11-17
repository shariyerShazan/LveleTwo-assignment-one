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
            if (!this.name || !this.age) {
                return "Name and age is required";
            }
             return `'Name: [${this.name}], Age: [${this.age}]'`
        } 
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails()); //! output -> 'Name: [John Doe], Age: [30]'

const person2 = new Person('Alice', 25);
console.log(person2.getDetails()); //! output -> 'Name: [John Doe], Age: [30]'

// const person3 = new Person('Alice');
// console.log(person3.getDetails()); //! output -> Name and age is required





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

const filterByRating = (books: TBook[]) : TBook[] | string=>{
       const sortedBook = books.sort((a,b)=> a.rating - b.rating).filter((book)=> book.rating > 4)
       if(sortedBook.length === 0) {
        return "No book found"
       }
       return sortedBook
}
const books : TBook[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
  ];
console.log(filterByRating(books)); //! output -> [ { title: 'Book A', rating: 4.5 }, { title: 'Book C', rating: 5 } ]
const books2 = []
console.log(filterByRating(books2));//! output -> No book found






