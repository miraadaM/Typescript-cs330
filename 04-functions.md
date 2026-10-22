# Functions in TypeScript

## Declaring and calling functions
In TypeScript functions can accept parameters, specify their types, and return a value with a declared type
```Typescript
function multiply(a: number, b: number): number {
    return a * b;
}
let result: number = multiply(4, 5);
console.log(result); // 20
```

Function declarations can generally appear before or after the code that calls them because JavaScript processes their declarations before executing the surrounding code. Function expressions assigned to variables, however, must be initialized before they are called.

### Recursion example
 ```Typescript
function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
let answer: number = factorial(5);
console.log(answer); // 120
```
## Multiple Parameters & returning Multiple Values
- Functions can accept multiple parameters, including parameters of different types:
```Typescript
function introduce(name: string, age: number): string {
    return `${name} is ${age} years old.`;
}
```
- TypeScript functions return one value, but that value can contain multiple pieces of information. For example:
  ```Typescript
  function splitText(text: string): [string, string] {
    const middle = Math.floor(text.length / 2);
    return [text.slice(0, middle), text.slice(middle)];
  }
  const [first, second] = splitText("TypeScript");
  ```
## Pass-by value
TypeScript uses JavaScript's argument-passing behavior: arguments are **passed by value**. When an object is passed to a function, the copied value is a reference to that object. This means the function can modify the object's properties, but reassigning its parameter does not change the caller's variable.
```Typescript
// testing pass-by-value with a primitive
function changeNumber(value: number): void {
    value = 100;
}
let originalNumber: number = 10;
changeNumber(originalNumber);
console.log("Original number:", originalNumber); // 10

// testing pass-by-value with an object reference
function changeName(person: { name: string }): void {
    person.name = "Alex";
}
const student = { name: "Cat" };
changeName(student);
console.log("Updated name:", student.name); // Alex
```
The number remains unchanged because the parameter receives a copy of its value. The object changes because the copied reference still points to the same object.

## Scoping rules & Memory & Side effects
- TypeScript uses **lexical (static) scope**: where a variable is declared determines where it can be accessed. A local binding is not available outside its scope, although an object or value can remain accessible if it is returned or captured by a closure.
- JavaScript engines manage memory automatically. Function calls generally use execution contexts and call-stack mechanisms, while objects are commonly allocated in managed memory. However, the exact physical storage of parameters and local variables depends on the JavaScript engine and its optimizations. It is not accurate to claim that every variable always lives on the stack or every object always lives on the heap.
- A side effect occurs when a function changes something outside its own result, such as modifying an object or a global variable, or printing to the console.
  
## Other important aspects
Typescript supports default parameter valus

# **References**
- **Handbook - Functions. (n.d.)** [link](https://www.typescriptlang.org/docs/handbook/functions.html)
