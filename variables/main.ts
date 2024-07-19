function documentFinder<ElementType>(identifier: string): ElementType {

     return document.querySelector("#root" + " " + identifier) as ElementType;
}
const root = document.getElementById("#root") as HTMLDivElement;

/**
 * var vs let vs const
 * ...
 */

// Ques 1 - Scop & Hosting ?
/**
 * Var has a special behavior so you can access var before initialize but you get undefined !
 *  */
// {
// console.log(varVar); // outPut => undefined;
// // console.log(letVar); // outPut => Error;
// // console.log(constVar); // outPut => Error;
// //
// varVar = "before initialization"; // works perfect
// // letVar = "before initialization"; // you cant access variables before initialize
// // constVar = "before initialization"; // you cant access variables before initialize

// console.log(varVar); // outPut => before initialization;
// // console.log(letVar); // outPut => Error;
// // console.log(constVar); // outPut => Error;

// var varVar = "var variable";
// let letVar = "let variable ";
// const constVar = "const variable";


// console.log(varVar); // outPut => var variable;
// console.log(letVar); // outPut => let variable;
// console.log(constVar); // outPut => const variable;

// }





// Ques 2 - What is shadowing ?
/**
 * var => you can't shadow var cuz it's gonna update the prev value !
 * let => you can't shadow var cuz it's gonna update the prev value !
 *  */
// Notes: You can shadow var to let but the opposite

// (function () {
//      var v = "0 => var";
//      let l = "0 => let";
//      var vToL = "0 => var to let";
//      // let lToV = "0 => let to var"; // About lToV => here it works fine

//      if (true) {
//           var v = "1 => var";
//           let l = "1 => let";
//           let vToL = "1 => => var to let";
//           // var lToV = "0 => let to var"; // About lToV => here it's gonna throw an error

//           console.log(v);
//           console.log(l);
//           console.log(vToL);
//      };

//      console.log(v);
//      console.log(l);
//      console.log(vToL);
// })();






// Ques 3 - Declaration ?
/**
 * !!!
 *  */
// Notes: You can redeclare variables in another scop not in the same...

// var a; // Works absolutely fine
// var a; // Works absolutely fine

// let b;
// // let b; // This will throw an error => this variable is already declared

// const c = null;
// // const c = null; // Works exactly like let

// { // this is as we code before is shadowing
//      var a;
//      let b;
//      const c = null;
// };





// Ques 4 - Declare variables without initialization & re-initialization ?
/**
 * var => works fine !
 * let => works fine !
 * const => throw an error !
 *  */

// var a;
// a = 0;
// let b;
// b = 0;
// // const c; throw an error
// // c = 0; // throw an error





// Ques 5 - What is the output ?
/**
 * Ques1 => undefined
 * Ques2 => 1 => undefined, 2 => error, 3 => error
 * Ques3 => undefined
 *  */



// (function () {
//      console.log("Ques => 1");
//      console.log(a);

//      var a = 10;
// })();

// (function () {
//      console.log("Ques => 2");
//      console.log(a); // undefined
//      // console.log(b); // Error
//      // console.log(c); // Error

//      var a = 10;
//      let b = 10;
//      const c = 10;
// })();


