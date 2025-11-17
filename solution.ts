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



interface Book {
    title : string ;
    author: string ;
    publishedYear: number ;
    isAvailable: boolean;
}

const printBookDetails = (book : Book)=> {
        console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable? "Yes" : "No"}`)
}





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
