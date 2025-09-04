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





// Now let's see how we can achieve similar functionality with type aliases.

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







// Another difference is that interfaces can be implemented by classes, while type aliases cannot.
// This makes interfaces more suitable for defining contracts that classes must adhere to.

// Example of interface being implemented by a class
interface CanWalk {
  walk(): void;
}

class Person implements CanWalk { // ✅ Correct and idiomatic
  walk() {
    console.log("Walking...");
  }
}

// Example of type alias being used with a class
// Here we define a type alias for an object type
type CanTalk = {
  talk(): void;
};

type StringOrNumber = string | number;

class Speaker implements CanTalk { // ✅ Works, but less common
  talk() {
    console.log("Talking...");
  }
}

// class Thing implements StringOrNumber {} // 🛑 Error: A class can only implement an object type or intersection of object types.




// creating an Interface
interface New_User {
  id: number;
  name: string;
}

// extending the interface New_User to create a new interface Admin
// this is useful when you want to create a more specific type based on an existing one, without tweaking the original type.
interface Admin extends New_User {
  permissions: string[];
}

const adminUser: Admin = {
  id: 1,
  name: "Jane Doe",
  permissions: ["read", "write"]
};

//but we can't use extends with type aliases directly.