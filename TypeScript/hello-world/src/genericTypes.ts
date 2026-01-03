/* function getFirstElement(array: number[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);
console.log(firstNum);

const strings = ["sdf", "sdfsd", "sdfsdf"];
const firstString = getFirstElement(strings); // Error */

// Generic Types - whenever you have a type that needs to conform to the data being passed in or the data being returned or just used in some way in that function, you can use generics
function getFirstElement<ElementType>(array: ElementType[]) {
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
