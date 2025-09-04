// Apart from declaration merging, interfaces and type aliases are very similar.
// Both can be used to define the shape of an object or a function signature.

interface User {
    name : string,
    email : string
}
// here i am re-opening the interface 'User' and adding a new property 'role' to it.
// This is called declaration merging, and it is a unique feature of interfaces in TypeScript.
// It allows us to extend existing interfaces without modifying the original declaration.
// This is particularly useful when working with third-party libraries where you might want to add properties to existing interfaces.
interface User {
    role : string
}

console.log("Interface Merging : ", {name : "John", email : "john@example.com", role : "admin"});

type Product = {
    id : number,
    name : string
}
// Now u can't simply redefine the type alias 'Product' like we did in interface above.
//but if you want to add more properties to the type alias then you can use intersection types.

type ProductDetails = Product & {
    price : number
}

// but remember that intersection types create a new type, they don't modify the existing type.
const product: ProductDetails = {id : 1, name : "Laptop", price : 1000};
console.log("Type Alias with Intersection : ", product);