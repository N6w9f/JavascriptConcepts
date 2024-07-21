const documentFinder = <ElementType = HTMLElement>(identifier: string): ElementType => document.querySelector("#root" + " " + identifier) as ElementType;
const root = document.getElementById("#root") as HTMLDivElement;

// /**
//  * Functions
//  * ...
//  */

// // Ques 1 - What are first class functions ?
// /**
//  *
//  */

// function square(number: number) {
//      return Math.pow(number, 2);
// }; function runSquareFn(callback: (number: number) => number, number: number) {
//      console.log(callback(number));
// };

// runSquareFn(square, 3);





// // Ques 2 - What is IIFE ?
// /**
//  * immediately invoke function expression !
//  * IIFE is a function that runs it self
//  */

// (function greeting(name: string) {

//      // name = name[0].toUpperCase() + (() => {

//      //      let newString = "";
//      //      for (let i = 1; i < name.length; i++) {
//      //           newString += name[i].toLocaleLowerCase();
//      //      };

//      //      return newString;

//      // })();

//      name = name[0].toUpperCase() + name.slice(1);
//      console.log(`Hello ${name}`);

// })("nawaf");





// // Ques 3 - Functions scope ?
// /**
//  * ***
//  */

// var num1 = 20, num2 = 3, username = "nawaf alrmadi";
// function multiply() {
//      return num1 * num2;
// }; console.log(multiply()); // 60

// function greetingScope() {

//      var num1 = 2, num2 = 3;

//      function add() {

//           return username + " scored " + (num1 + num2); // 5

//      };

//      return add() // nawaf alrmadi scored 5;

// };
// console.log(greetingScope());





// // Ques 4 - Functions scope | O/P based ques ?
// /**
//  * ***
//  */

// for (var i = 0; i < 5; i++) {

//      (function (time: number) {

//           setTimeout(() => {
//                console.log(time);
//           }, time * 1000);

//      })(i); // var doesn't have a block scope so you should put it inside a function

// };





// // Ques 5 - hosting ?
// /**
//  * function hosting differently !
//  */

// console.log(greetSomeone("Nawaf"));

// function greetSomeone(name: string) {

//      return sayHello() + " " + name;
// }

// function sayHello() {

//      return "Hello";

// };





// // Ques 6 - guess the output & what is params and what is arguments ?
// /**
//  * output => undefined
//  */

// var x = 21;

// function display(...parameters: any) /** Parameters */ {

//      //@ts-ignore
//      console.log(x); // undefined

//      var x = "Nawaf"

// };

// display("string", 0, true, [], {}); // Arguments





// // Ques 7 - difference between function an arrowFunction?
// /**
//  * function => support arguments and some extra methods but not this keyword in global
//  * arrowFunction => cleaner than regular function, support this keyword in global
//  */

// function regularFn() {

//      return arguments /**, this */;

//      // @ts-ignore
// }; const irregularFn = () => /** arguments,*/ this;

// // @ts-ignore
// console.log(regularFn(" ", " ", "")), console.log(irregularFn(" ", " ", ""));

// var user = {
//      username: "nawaf",

//      fn() {

//           console.log(this /** refers to its current object */);

//      },
//      arrowFn: () => {

//           // @ts-ignore
//           console.log(this /** refire to its function's object so in this case it has no parent function then this keyword refers to window object */);

//      }
// };

// user.fn();
// user.arrowFn();