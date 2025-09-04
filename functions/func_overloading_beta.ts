// This is how we implement the function overloading in the production grade code
// as javascript don'ty support function overloading natively. So we use typescript to achieve this.

//the interface will simply define the structure of the object, it won't create the object itself.
interface Coordinate {
  x: number;
  y: number;
}

// Function overloads (signatures only)
// it is like you are defining all the possible ways to call the function, or the different combinations of parameters it can accept.
// but you dont need to provide the implementation here, like we do in cpp or java.
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

// Actual implementation
// here we need to implement the function in such a way that it can handle all the different signatures we defined above.
// and it is best to use Unknown type for the parameters in the implementation.
// because unknown means we don't know what type of data we will get, so we need to check the type at runtime and handle it accordingly.
// if we use any type then it will defeat the purpose of function overloading, because any means we can pass any type of data, and it will not give us any type safety.
// so it is better to use unknown type and then check the type at runtime.
// and when we use unknown type,so we need to cast it mandatorily to the desired type before using it, otherwise it will throw error.
// so as per the desired output we can cast it to the desired type.

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
// Initialize coord with default values, this is a best practice to avoid undefined values.
  let coord: Coordinate = { x: 0, y: 0 };

  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate), // copy properties x & y
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

// above func. has second argument as optional, which tells us that if we got object in first argument then we don't need second argument.
// and if we got number in first argument then we need second argument as well.
// and according;y we handle it in the implementation.

// even if the return type of arg is unknown but still it demands specific types of values as input  depending upon the overloads defined.
// so if we try to pass string or boolean or any other type then it will throw error.
// parseCoordinate("hello", true); // Error: Argument of type 'string' is not assignable to parameter of type 'Coordinate | number'.
