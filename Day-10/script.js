/*
Day: 09
Date: 19-Aug-2026

Topics Covered:
Arrays & Objects - Array methods (map, filter, reduce, forEach, find), 
object literals, and nested data structures.

Practice:
Given a sample dataset (array of objects),
filter, sort, and transform it in 8 different ways.
*/

// Sample dataset 

let students = [
    {
        name: "Banu", age: 21, department: "AI&DS", marks: 85
    },
    {
        name: "Rahul", age: 22, department: "CSE", marks: 72
    },
    {
        name: "Anu", age: 20, department: "ECE", marks: 91
    },
    {
        name: "Arun", age: 23, department: "AI&DS", marks: 64
    },
    {
        name: "Priya", age: 21, department: "CSE", marks: 78
    },
    {
        name: "Vishnu", age: 22, department: "AI&DS", marks: 95
    }
];

// 1. FILTER - Students who scored above 80

let highScorers = students.filter((student) => {
    return student.marks > 80;
});

console.log("1. Students who scored above 80:");
console.log(highScorers);

// 2. FILTER - Students from AI&DS department

let aiStudents = students.filter((student) => {
    return student.department === "AI&DS";
});

console.log("\n2. Students from AI&DS:");
console.log(aiStudents);

// 3. SORT - Students by marks (highest first)

let sortedByMarks = [...students].sort((a, b) => {
    return b.marks - a.marks;
});

console.log("\n3. Students sorted by marks (highest to lowest):");
console.log(sortedByMarks);

// 4. SORT - Students by age (youngest first)

let sortedByAge = [...students].sort((a, b) => {
    return a.age - b.age;
});

console.log("\n4. Students sorted by age (youngest to oldest):");
console.log(sortedByAge);

// 5. MAP - Get only student names

let studentNames = students.map((student) => {
    return student.name;
});

console.log("\n5. Student names:");
console.log(studentNames);

// 6. MAP - Create simplified student objects

let studentDetails = students.map((student) => {
    return {
        name: student.name,
        marks: student.marks
    };
});

console.log("\n6. Student names and marks:");
console.log(studentDetails);

// 7. FIND - Find a particular student

let foundStudent = students.find((student) => {
    return student.name === "Anu";
});

console.log("\n7. Student named Anu:");
console.log(foundStudent);

// 8. REDUCE - Calculate average marks

let totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

let averageMarks = totalMarks / students.length;

console.log("\n8. Average marks:");
console.log(averageMarks.toFixed(2));

// Print every student's name and marks

console.log("\nStudent marks:");

students.forEach((student) => {
    console.log(`${student.name}: ${student.marks}`);
});

