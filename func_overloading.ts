// Traditional approach 
function combine(input1: string | number, input2: string | number) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2; // Addition for numbers
    } else {
        return input1.toString() + input2.toString(); // String concatenation
    }
}

console.log(combine(10, 20));   // 30
console.log(combine("Hello", " World")); // Hello World

// Approach 2: Function Overloading
// Define multiple function signatures
function combine2(input1: number, input2: number): number;
function combine2(input1: string, input2: string): string;

// Implementation
function combine2(input1: any, input2: any): any {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    } else {
        return input1.toString() + input2.toString();
    }
}

console.log(combine2(10, 20));   // 30 (number)
console.log(combine2("Hello", " World")); // Hello World (string)

// Real World Example: fetching different APIs based on the input type
// Overloaded signatures
function fetchData(url: string): Promise<string>;
function fetchData(id: number): Promise<object>;

// Implementation
function fetchData(input: string | number): Promise<any> {
    if (typeof input === "string") {
        // Using fetch API requires DOM types or node-fetch
        return fetch(input).then(response => response.text());
    } else {
        return Promise.resolve({ id: input, name: "Sample Data" });
    }
}

// Usage
fetchData("https://api.example.com/data").then(console.log); // Fetches API data
fetchData(42).then(console.log); // Returns local data object

// Key limitations of function overloading:
// 1. Doesn't work with arrow functions
// 2. Implementation function must be compatible with all overloads
// 3. Can become complex with many parameter variations
// 4. Not as flexible as union types for some scenarios