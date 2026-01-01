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
