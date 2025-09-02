//These are Named functions with Named Exports
//Function has a name (add) and can be reused internally.
//Exported with its name.
//Import: import { add } from "./file";
//multiple functions can be exported from a single file

export function add(a: number, b: number) : number {
  return a + b;
}
export function multiply(a: number, b: number) : number {
  return a * b;
}

// use of arrow function.
export const addition  = (a:number , b: number) : number => {
    return a + b;
}

