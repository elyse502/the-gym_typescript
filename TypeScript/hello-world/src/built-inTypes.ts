let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;

// Any Type
function render(document: any) {
  console.log(document);
}

// Arrays
let numbers = [1, 2, 3];
let numbers1: number[] = [];
numbers1.forEach((n) => n.toFixed); // another benefit of type annotation you get intellisense(autocomplete)

// Tuples - fixed length arrays with different types
let user: [number, string] = [1, "John"];
user[1].charAt(0); // autocomplete works here too because of type annotation and intellisense
user.push(0); // but you can still push more items, which is a drawback of tuples in TypeScript

// Enums - a way of giving more friendly names to sets of numeric values
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase for enum names
const enum Size {
  Small = 1,
  Medium,
  Large,
}
// or with string values
// enum Size { Small = 's', Medium = 'm', Large = 'l' };
let mySize: Size = Size.Medium;
console.log(mySize);
