// basic data types
let studentName: string = "Name";
let age: number = 17;
let isStudent: boolean = true;

// Array
let courses: string[] = [
    "Programming Languages",
    "Differential Equations",
    "Data Science"
];

// Object
let student = {
    name: studentName,
    age: age,
    courses: courses
};

// Operators
let completedCourses: number = 2;
let totalCourses: number = 3;
let remainingCourses: number = totalCourses - completedCourses;

// Type inference
let university = "Simmons University";

// Union type
let studentID: number | string = "12345";

// Tuple
let courseInfo: [string, number] = [
    "Programming Languages",
    4
];

// Interface
interface Course {
    name: string;
    credits: number;
    completed: boolean;
}

let currentCourse: Course = {
    name: "Programming Languages",
    credits: 4,
    completed: false
};

// Output
console.log("Student:", student);
console.log("Remaining courses:", remainingCourses);
console.log("University:", university);
console.log("Student ID:", studentID);
console.log("Course:", currentCourse);