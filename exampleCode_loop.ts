// one-condition if/else statement

let isStudent: boolean = true;

if (isStudent === true) {
    console.log("The person is a student.");
} else {
    console.log("The person is not a student.");
}


// multiple-condition

let age: number = 20;
let hasStudentID: boolean = true;

if (age > 18 && hasStudentID) {
    console.log("Both conditions are true.");
} else {
    console.log("At least one condition is false.");
}


// if / else if 
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


// short-circuit evaluation for &&

let number: number = 0;
if (number !== 0 && 10 / number > 1) {
    console.log("The condition is true.");
} else {
    console.log("The condition is false."); //prints this
}


// short-circuit evaluation for ||

let isAdmin: boolean = true;

if (isAdmin || checkPermission()) {
    console.log("Access allowed."); // prints this
}

function checkPermission(): boolean {
    console.log("Checking permission...");
    return false;
}

// switch-case

let day: number = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Unknown day");
}


// dangling-else rule

let x: number = 1;
let y: number = 3;

// else belongs to the nearest unmatched if:
if (x === 1) {
    if (y === 2) {
        console.log("Both conditions are true.");
    } else {
        console.log("The inner condition is false.");
    }
}