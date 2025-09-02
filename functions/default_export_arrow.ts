// this function is also a defaukt export function but it will use an arrow function.

const addition = (a:number, b:number) : number => {
    return a + b;
}

export default addition;

// so if we uncomment it then it will throw error as we can't export multiple default functions.

// const subtraction = (a:number, b:number) : number => {
//     return a-b ;
// }

// export default subtraction;