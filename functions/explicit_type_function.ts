
// this is a way to explicitly add type to function 
// here it means that add will take 2 values i.e a,b both of type number 
// and it will again return a number
// then there comes the arrow function which will further define the function

export const add : (a: number, b: number) => number = (a , b) => {
    return a + b ;
}


// here we can see that i am exporting both named and deafult functions.
// so ts support 1 default export and multiple named export from a single file.
// at the time of import let say i do a mistake like 
// import subtraction ,{ add } from './file';
// then subtraction will automatically contain default function.

const sub : (a: number, b: number) => number = (a , b) => {
    return a - b ;
}

export default sub;