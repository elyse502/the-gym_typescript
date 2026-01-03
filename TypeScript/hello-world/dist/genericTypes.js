"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstElement(array) {
    return array[0];
}
const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);
console.log(firstNum);
const strings = ["sdf", "sdfsd", "sdfsdf"];
const firstString = getFirstElement(strings);
console.log(firstString);
const booleans = [true, false, true];
const firstBoolean = getFirstElement(booleans);
console.log(firstBoolean);
const mixed = [1, "sdf", true];
const firstMixed = getFirstElement(mixed);
console.log(firstMixed);
