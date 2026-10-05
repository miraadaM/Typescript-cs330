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

```typescript
let name: string = "Bella";
let language: string = "TypeScript";
```

Strings can be written using single quotes, double quotes, or template literals.

```typescript
let greeting: string = `Hello, ${name}!`;
```

### Boolean
The boolean type represents a logical value: true or false.

```typescript
let isStudent: boolean = true;
let isFinished: boolean = false;
```

### Arrays
Arrays store multiple values. TypeScript allows the programmer to specify the type of values that an array should contain.

```typescript
let scores: number[] = [90, 85, 95];
let courses: string[] = ["Math", "Computer Science", "Data Science"];
```
Another syntax for arrays is:

```typescript
let scores: Array<number> = [90, 85, 95];
```

### Object Types
Objects can contain multiple related properties. TypeScript can describe the types of those properties.

```typescript
let student: {
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

```typescript
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

# Variables and Naming Conventions
Variables in TypeScript can be declared using let and const.

```typescript
let score: number = 90;
score = 95;
const language: string = "TypeScript";
```

let is used when the variable may be reassigned, while const is used when the variable should not be reassigned.

TypeScript follows the same basic identifier rules as JavaScript. Variable names cannot contain spaces or begin with most special characters.

Common naming conventions include:

- camelCase for variables and functions
- PascalCase for classes, interfaces, and some types
- descriptive names instead of unclear abbreviations

# Static Typing and Type Checking

One of the main differences between TypeScript and JavaScript is that TypeScript provides static type checking.

A variable can have a declared type:

```typescript
let age: number = 20;
```

If the programmer later tries to assign a string to that variable:

```typescript
age = "twenty";
```

TypeScript reports an error during compilation.

This means many type-related problems can be detected before the program is executed.

TypeScript is therefore often described as a **statically typed language**, although its type system has some flexible features that make the distinction less absolute than in languages with stricter type systems.

# Explicit and Implicit Typing

TypeScript supports both explicit and implicit typing.

**Explicit typing**

The programmer directly specifies the type:

```typescript
let age: number = 20;
let name: string = "Name";
let isStudent: boolean = true;
Implicit typing
```

TypeScript can often infer the type from the value assigned to a variable.

```typescript
let age = 20;
let name = "Name";
let isStudent = true;
```

TypeScript infers:

- age       → number
- name      → string
- isStudent → boolean

Type inference reduces the amount of code the programmer has to write while still providing type checking.

# Mutable and Immutable Variables

TypeScript uses let and const to control whether a variable can be reassigned.

- A let variable is mutable
- A const variable cannot be reassigned:

However, const does not make every object or array completely immutable.

For example:

```typescript
const courses: string[] = ["Math", "Computer Science"];
courses.push("Data Science");
```

The variable courses still refers to the same array, but the contents of the array can change.

Therefore, const prevents reassignment of the variable itself rather than automatically making the referenced object immutable.

# Operators and Operations on Values

TypeScript supports the common operators inherited from JavaScript.

Arithmetic operators:
```typescript
let a: number = 10;
let b: number = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

These operators perform arithmetic operations on numbers.

Comparison operators:
```typescript
console.log(a > b);
console.log(a < b);
console.log(a === b);
console.log(a !== b);
```

Comparison operations produce a boolean result.

Logical operators work with boolean expressions.

Assignment operators:

```typescript
let score: number = 10;

score += 5;
score -= 2;
score *= 2;
```

The assignment operators modify the value stored in a variable.

# Operations Between Different Types

TypeScript checks whether operations make sense based on the types involved.

For example, adding two numbers performs arithmetic:

```typescript
let x: number = 10;
let y: number = 5;

console.log(x + y); // 15
```

Adding strings performs string concatenation:

```typescript
let schoolName: string = "Simmons";
let university: string = "University";

console.log(schoolName + " " + university);
```

TypeScript does not allow arbitrary operations between incompatible types.

For example:

```typescript
let age: number = 20;
let name: string = "Bella";

// console.log(age * name); // TypeScript error
```

JavaScript does allow some automatic type conversions in certain operations. Because TypeScript compiles to JavaScript, developers still need to understand JavaScript's runtime behavior.

Explicit conversion can be used when a value needs to be changed to another type:

```typescript
let textNumber: string = "25";
let numberValue: number = Number(textNumber);

console.log(numberValue + 5);
```

The result is 30.

# Binding and Variable Values

A variable declaration creates a binding between a name and a value.

For example:

```typescript
let score: number = 90;
```

The name score is associated with the value 90.

# Complex Data Types

Basic types are useful for individual values, but larger programs usually need to represent more complicated data.

### Arrays

```typescript
let grades: number[] = [90, 85, 95];
Objects
let student = {
    name: "Mirada",
    age: 20,
    major: "Computer Science"
};
```

### Tuples

A tuple represents a fixed sequence of values where each position can have a specific type.

```typescript
let studentInfo: [string, number] = ["Bella", 17];
```

The first value must be a string and the second value must be a number.

### Union Types

A union allows a value to have more than one possible type.

```typescript
let id: number | string;

id = 123;
id = "ABC123";
```

### Interfaces

Interfaces can describe the structure of objects.

```typescript
interface Student {
    name: string;
    age: number;
    major: string;
}

let student: Student = {
    name: "Bella",
    age: 17,
    major: "Computer Science"
};
```

These features allow TypeScript to represent complex structures while still providing type checking.

# Limitations and Potential Problems

TypeScript's type system can prevent many common programming errors, but it does not guarantee that a program is completely correct.

One limitation is that TypeScript's type checking mainly happens during development and compilation. The generated JavaScript does not contain the same compile-time type information.

For example:

```typescript
let age: number = 20;
```

The type annotation helps TypeScript check the program, but JavaScript ultimately executes the resulting code.

TypeScript also provides escape hatches such as any and type assertions.

For example:

```typescript
let value: any = "hello";
```

Using any reduces the protection provided by the type system because TypeScript allows many operations on an any value without checking them strictly.

Another limitation is that external data, such as information received from an API or user input, may not actually match the type expected by the program. Type annotations alone cannot guarantee that external data is valid at runtime.

Therefore, TypeScript is a tool for reducing errors and improving code reliability, not a guarantee that a program has no bugs.

