# TypeScript Tutorial

## Introduction
TypeScript is a programming language developed by Microsoft. It is a superset of JavaScript, which means that TypeScript adds additional features to JavaScript while remaining compatible with it.

One of the main features of TypeScript is static typing. Types allow developers to describe what kind of data a variable should contain and can help identify errors before a program is run.

## Brief History
TypeScript was developed by Microsoft and first released in 2012. It was designed by Anders Hejlsberg.

TypeScript was created partly to make it easier to develop and maintain large JavaScript applications. As JavaScript projects became larger and more complex, developers needed additional tools for organizing code and detecting errors.

## What is TypeScript good for?
- Web development
- Front-end applications
- Back-end applications with Node.js
- Full-stack applications
- Large-scale software projects
- APIs and server applications

# Setting Up TypeScript To Your Laptop
I will use Visual Studio Code (VS Code) as my development environment for this project
1. First, I need to have Node.js installed. Node.js includes npm, which can be used to install TypeScript and other JavaScriptTypeScript packages.

2. After creating a project folder and opening it in VS Code, TypeScript can be installed with:

**npm install -D typescript**

I can then create a TypeScript configuration file using:

**npx tsc --init**

This creates a tsconfig.json file, which contains configuration options for the TypeScript compiler.

# Running your file
1. My first program is "Hello World". I saved it as helloWorld.ts:

let message: string = "Hello, World!";
console.log(message);

2. To compile the TypeScript program into JavaScript, use:
npx tsc
3. Then run generated JavaScript file using:
node dist/helloWorld.js

My Current project structure:
```text
PLP_PROJECT/
├── src/
│   └── helloWorld.ts
├── dist/
│   └── helloWorld.js
├── README.md
├── .gitignore
└── tsconfig.json
```
## How to comment:
Single-Line Comments (//)

The basic TypeScript workflow:

```text
TypeScript (.ts)
       |
TypeScript Compiler (tsc)
       |
JavaScript (.js)
       |
Node.js / Browser
```

## Data Types and Variables

[Read the Data Types Tutorial](02-data-types.md)

# **References**

- [link](https://medium.com/totally-typescript/a-brief-history-of-typescript-from-origin-to-modern-adoption-791368ec4b91)
  
- **Alheraki, A. (n.d.). The story of TypeScript and how it enhanced JavaScript’s power** [link](https://simplifycpp.org/articles/a0603/the-story-of-typescript-and-how-it-enhanced-javascript-s-power/)
