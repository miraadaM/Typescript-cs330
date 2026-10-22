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

  
## Other important aspects
Typescript supports default parameter valus

