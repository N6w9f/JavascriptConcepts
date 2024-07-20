"use strict";
const documentFinder = (identifier) => document.querySelector("#root" + " " + identifier);
const root = document.getElementById("#root");
const nums = [1, 2, 3, 4, 5];
const students = [
    { name: "piyush", rollNumber: 31, mark: 80 },
    { name: "jenny", rollNumber: 15, mark: 69 },
    { name: "kaushal", rollNumber: 16, mark: 35 },
    { name: "dilpreet", rollNumber: 7, mark: 55 },
];
// first solution 
let nameLoop = [];
for (let i = 0; i < students.length; i++) {
    nameLoop.push(students[i].name.toUpperCase());
}
;
console.log(nameLoop);
// second solution 
const namesMap = students.map(obj => obj.name.toUpperCase());
console.log(namesMap);
// 2 - return only details those who scored more than 60 marks
// first solution
let marksLoop = [];
for (let i = 0; i < students.length && students[i].mark > 60; i++) {
    marksLoop.push(students[i]);
}
;
console.log(marksLoop);
// second solution
const marksFilter = students.filter(obj => obj.mark > 60);
console.log(marksFilter);
// 3 - return only details those who scored more than 60 marks and got more than 15 in rollNumber
// first solution
let marksRollNumberLoop = [];
for (let i = 0; i < students.length && students[i].mark > 60 && students[i].rollNumber > 15; i++) {
    marksRollNumberLoop.push(students[i]);
}
;
console.log(marksRollNumberLoop);
// second solution
const marksRollNumberFilter = students.filter(obj => obj.mark > 60 && obj.rollNumber > 15);
console.log(marksRollNumberFilter);
// 4 - return the marks sum of all students
// first solution
let marksSumLoop = 0;
for (let i = 0; i < students.length; i++) {
    marksSumLoop += students[i].mark;
}
;
console.log(marksSumLoop);
// second solution
const marksSumReduce = students.reduce((previous, currentObj, index, array) => previous + currentObj.mark, 0);
console.log(marksSumReduce);
// 5 - return names of those who scored  more then 60 marks
// first solution
let namesMarksLoop = [];
for (let i = 0; i < students.length && students[i].mark > 60; i++) {
    namesMarksLoop.push(students[i].name);
}
;
console.log(namesMarksLoop);
// second solution
const namesMarksFilter = students.filter((obj) => obj.mark > 60).map((obj) => obj.name);
console.log(namesMarksFilter);
// 6 - return total marks for those who scored more then 60 after adding 20 marks for every student that got less than 60
// first solution
let marksSumLoop2 = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].mark <= 40)
        continue;
    marksSumLoop2 += (students[i].mark < 60 ? students[i].mark + 20 : students[i].mark);
}
;
console.log(marksSumLoop2);
// second solution
const marksSum = students.filter((obj) => obj.mark > 40).reduce((previous, currentObj) => previous + (currentObj.mark < 60 ? currentObj.mark + 20 : currentObj.mark), 0);
console.log(marksSum);
