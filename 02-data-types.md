# Data Types and Variables in TypeScript

TypeScript provides a type system that allows programmers to describe what kind of data a variable is expected to contain. Since TypeScript is a superset of JavaScript, it includes JavaScript's basic data types while also adding features such as static type checking, type annotations, interfaces, and other tools for working with structured data.

Understanding data types is important because the type of a value affects what operations can be performed on it and how the program handles that value.

---

## 1. Data Types in TypeScript

TypeScript supports several basic data types.

### Number

The `number` type is used for both integers and floating-point numbers.

```typescript
let age: number = 20;
let temperature: number = 72.5;
```
Unlike some programming languages TypeScript does not have separate int and float types. Both are represented by number.

### Strings
The string type represents text.
```
let name: string = "Bella";
let language: string = "TypeScript";
```
Strings can be written using single quotes, double quotes, or template literals.
```
let greeting: string = `Hello, ${name}!`;
```

### Boolean
The boolean type represents a logical value: true or false.
```
let isStudent: boolean = true;
let isFinished: boolean = false;
```

### Arrays
Arrays store multiple values. TypeScript allows the programmer to specify the type of values that an array should contain.
```
let scores: number[] = [90, 85, 95];
let courses: string[] = ["Math", "Computer Science", "Data Science"];
```
Another syntax for arrays is:

```let scores: Array<number> = [90, 85, 95];```

### Object Types
Objects can contain multiple related properties. TypeScript can describe the types of those properties.

```let student: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "Bella",
    age: 5,
    isStudent: true
};
```

This allows TypeScript to check that the object contains the expected types of values.

### null and undefined
TypeScript also has the types null and undefined.
```
let emptyValue: null = null;
let notAssigned: undefined = undefined;
```
When strict mode is enabled, TypeScript treats null and undefined carefully and does not automatically allow them to be assigned to unrelated types.

### Other Types

TypeScript also provides more advanced types, including:
- any
- unknown
- void
- never
- tuples
- unions
- intersections
- enums
- interfaces
- custom type aliases

