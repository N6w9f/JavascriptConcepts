const documentFinder =
     <ElementSchema = HTMLElement>(identifier: ElementSchema): ElementSchema => document.querySelector("#root" + " " + identifier) as ElementSchema;

const root = document.getElementById("#root") as HTMLDivElement;
const nums = [1, 2, 3, 4, 5];

/**
 * Map | Filter | Reduce
 * ...
 */


// Ques 1 - What is map | filter | reduce ?
/**
 * map => creates a new array from an existing one with applying a function before return the new value !
 * filter => filters an existing array to return only a specific value!
 * reduce => !
 */

// const nums = [1, 2, 3, 4, 5];

// const mapNums = nums.map((value, index, array) => ({
//      index,
//      value,
//      actualArray: array

// }));
// const filterNums = nums.filter((value, index, array) => value > 0);
// const reduceNums = nums.reduce((prevValue, currentValue, currentIndex, array) => {

//      return prevValue + currentValue
// })
// console.log(nums);
// console.log(mapNums);
// console.log(filterNums);
// console.log(reduceNums);





// Ques 2 - Create polyfills of map | filter | reduce ?
/**
 *
 */

// type callbackSchema<arraySchema, tempSchema> = (value: arraySchema, index: number, array: arraySchema[]) => tempSchema;
// type reduceCallbackSchema<arraySchema, tempSchema> =
//      (previous: tempSchema, current: arraySchema, currentIndex: number, array: arraySchema[]) => tempSchema;
// interface Array<T> {

//      myMap<tempSchema>(callback: callbackSchema<T, tempSchema>): tempSchema[];

//      myFilter(callback: callbackSchema<T, boolean>): T[];

//      myReduce<tempSchema = T>(callback: reduceCallbackSchema<T, tempSchema>, initialValue?: tempSchema): T | tempSchema

// };

// Array.prototype.myMap = function (callback) {

//      let temp = [];

//      for (let i = 0; i < this.length; i++) {
//           temp.push(callback(this[i], i, this));
//      };



//      return temp;

// }; Array.prototype.myFilter = function (callback) {

//      let temp = [];

//      for (let i = 0; i < this.length; i++) {
//           callback(this[i], i, this) && temp.push(this[i]);
//      };


//      return temp;

// }; Array.prototype.myReduce = function (callback, initialValue) {

//      let temp = initialValue;

//      for (let i = 0; i < this.length; i++) {

//           temp = temp ? callback(temp, this[i], i, this) : this[i]

//      };

//      return temp;

// };

// const myMapNums = nums.myMap((value, index, array) => value);
// const myFilterNums = nums.myFilter((value, index, array) => true);
// const myReduceNums = nums.myReduce((previous, current, currentIndex, array) => previous + current);

// console.log(myMapNums);
// console.log(myFilterNums);
// console.log(myReduceNums);





// Ques 3 - What is the difference between  map | foreach ?
/**
 * map => returns a new array !
 * foreach => just loop throw the array without returning anything !
 */

// const array = [1, 2, 3, 4, 5];
// const map = array.map((value) => value + 10); // outPut => original array plus 10
// const foreach = nums.forEach((value) => value + 10); // outPut => undefined

// console.log("array", array);
// console.log("map", map);
// console.log("foreach", foreach);





// Ques 4 - O/P based Ques ?
/**
 * map => returns a new array !
 * foreach => just loop throw the array without returning anything !
 */

// 1 - return only names but in  in uppercase
type studentsSchema = {
     name: string,
     rollNumber: number,
     mark: number,
};
const students: studentsSchema[] = [
     { name: "piyush", rollNumber: 31, mark: 80 },
     { name: "jenny", rollNumber: 15, mark: 69 },
     { name: "kaushal", rollNumber: 16, mark: 35 },
     { name: "dilpreet", rollNumber: 7, mark: 55 },
];

// first solution 
let nameLoop: string[] = [];

for (let i = 0; i < students.length; i++) {

     nameLoop.push(students[i].name.toUpperCase());

};
console.log(nameLoop);
// second solution 
const namesMap: string[] = students.map(obj => obj.name.toUpperCase());
console.log(namesMap);


// 2 - return only details those who scored more than 60 marks
// first solution
let marksLoop: studentsSchema[] = [];

for (let i = 0; i < students.length && students[i].mark > 60; i++) {

     marksLoop.push(students[i]);

};
console.log(marksLoop);
// second solution
const marksFilter: studentsSchema[] = students.filter(obj => obj.mark > 60);
console.log(marksFilter);


// 3 - return only details those who scored more than 60 marks and got more than 15 in rollNumber
// first solution
let marksRollNumberLoop: studentsSchema[] = [];

for (let i = 0; i < students.length && students[i].mark > 60 && students[i].rollNumber > 15; i++) {

     marksRollNumberLoop.push(students[i]);

};
console.log(marksRollNumberLoop);

// second solution
const marksRollNumberFilter: studentsSchema[] = students.filter(obj => obj.mark > 60 && obj.rollNumber > 15);
console.log(marksRollNumberFilter);


// 4 - return the marks sum of all students
// first solution
let marksSumLoop: number = 0;

for (let i = 0; i < students.length; i++) {

     marksSumLoop += students[i].mark;

};
console.log(marksSumLoop);

// second solution
const marksSumReduce: number = students.reduce((previous, currentObj, index, array) => previous + currentObj.mark, 0);
console.log(marksSumReduce);


// 5 - return names of those who scored  more then 60 marks
// first solution
let namesMarksLoop: string[] = [];

for (let i = 0; i < students.length && students[i].mark > 60; i++) {

     namesMarksLoop.push(students[i].name);

};
console.log(namesMarksLoop);
// second solution
const namesMarksFilter: string[] = students.filter((obj) => obj.mark > 60).map((obj) => obj.name);
console.log(namesMarksFilter);


// 6 - return total marks for those who scored more then 60 after adding 20 marks for every student that got less than 60
// first solution
let marksSumLoop2: number = 0;

for (let i = 0; i < students.length; i++) {

     if (students[i].mark <= 40) continue;
     marksSumLoop2 += (students[i].mark < 60 ? students[i].mark + 20 : students[i].mark);

};
console.log(marksSumLoop2);
// second solution
const marksSum: number = students.filter((obj) => obj.mark > 40).reduce((previous, currentObj) => previous + (currentObj.mark < 60 ? currentObj.mark + 20 : currentObj.mark), 0);
console.log(marksSum);
