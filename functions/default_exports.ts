//These are Named functions with Default Exports
//Function has a name (add) and can be reused internally.
//Exported as the default export.
//Import: import add from "./file"; but you can change its name at the time of import
//Only one default export is allowed per file.

export default function add (a:number, b:number): number {
    return a+b;
}

