# Control Statements in TypeScript

## Boolean Values and conditions
TypeScript uses two boolean values: true and false. Boolean values are written in lowercase.

JavaScript also allows truthy and falsy values in conditions. For example, 0, "", null, and undefined are falsy, while most other values are truthy. However, TypeScript's static type checker can reject some values in conditions when their types are incompatible with the expected boolean condition. Using explicit boolean expressions generally makes programs easier to understand.

## if/else statements
- One-condition:
```typescript
let age: number = 20;

if (age >= 18) {
    console.log("The person is an adult.");
} else {
    console.log("Person is less than 18 years old");
```

- A multi-condition:
```typescript
let age: number = 20;
let hasStudentID: boolean = true;

if (age >= 18 && hasStudentID) {
    console.log("Both conditions are true.");
} else {
    console.log("At least one condition is false.");
}
```

- if/else if statements
```typescript
let score: number = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade below C");
}
```

## Code Blocks and the Dangling Else

TypeScript uses curly braces {} to group statements inside conditional branches. These braces mark where a block begins and ends. In JavaScript and TypeScript, an else belongs to the closest preceding if that does not already have a matching else. 

This is known as the **dangling else problem**: without clear braces, nested conditions can be interpreted differently than a reader expects.

## Short-Circuit Evaluation

With &&, if the left side is false, the right side is not evaluated because the entire AND expression must be false.

```typescript
let number: number = 0;

if (number !== 0 && 10 / number > 1) {
    console.log("Condition is true.");
} else {
    console.log("The condition is false.");
}
```

Because number !== 0 is false, the division condition on the right is skipped.

With ||, if the left side is true, the right side is skipped because the entire OR expression must be true.

```typescript
let isAdmin: boolean = true;

if (isAdmin || checkPermission()) {
    console.log("Access allowed.");
}

function checkPermission(): boolean {
    console.log("Checking permission...");
    return false;
}
```

In this example, checkPermission() is not called because isAdmin is already true. 

## Switch-Case Statements

A switch statement selects a branch by comparing an expression with several case values. It is useful when a variable is expected to match one of several specific values.
In TypeScript, switch cases use strict equality matching. A break statement is commonly used to exit the switch after a case executes. Without it, execution can continue into the following cases; this is called fall-through.







