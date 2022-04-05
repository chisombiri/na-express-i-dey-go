// //Common JS way
// const script2 = require('./script2.js');

// const a = script2.largeNumber;
// const b = 7;

// console.log(a + b);

//ES6 Modules syntax
import { largeNumber } from "./script2.js";

const a = largeNumber;
const b = 7;

console.log(a + b);
