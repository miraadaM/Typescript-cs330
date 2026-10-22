// multiplies two numbers
function multiply(a: number, b: number): number {
    return a * b;
}

const product: number = multiply(4, 5);
console.log("Product:", product); // 20

// recursive functions (factorial)
function factorial(n: number): number {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const factorialResult: number = factorial(5);
console.log("Factorial:", factorialResult); // 120


// returns two strings in a tuple (?)
function splitText(text: string): [string, string] {
    const middle: number = Math.floor(text.length / 2);
    return [
        text.slice(0, middle),
        text.slice(middle)
    ];
}

const [firstHalf, secondHalf] = splitText("TypeScript");
console.log("First half:", firstHalf);   // TypeS
console.log("Second half:", secondHalf); // cript

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


// example of that reassigning a parameter does not replace the caller's object 

function replaceObject(person: { name: string }): void {
    person = { name: "Another person" };
}
replaceObject(student);
console.log("Name after reassignment:", student.name); // Alex
