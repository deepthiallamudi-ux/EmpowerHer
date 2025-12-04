//extrnal file contain reusable code
//imporrted into other files
//cab contain variables, functions, classes, etc.
// introduced in ES6

// import{areaOfCircle, circumferenceOfCircle, volumeOfSphere } from './mathfun.js';
//console.log(PI);
//console.log(areaOfCircle(5));
// console.log(circumferenceOfCircle(5));
// console.log(volumeOfSphere(5));

import areaOfCircle  from "./mathfun.js"; 
// default import without curly braces i can change the name of areaOfCircle to any name bcoz its default export
console.log(areaOfCircle(5));