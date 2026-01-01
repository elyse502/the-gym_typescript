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

// Functions
function calculateTax(income: number, taxYear?: number): number {
  //   let x; // unused variable error if noUnusedLocals is true
  if ((taxYear || 2022) < 2022) return income * 1.2;
  // undefined behavior if noUnusedParameters is true

  return income * 1.3;
}

console.log(calculateTax(10_000, 2021));
console.log(calculateTax(10_000, 2022));
console.log(calculateTax(10_000)); // taxYear is optional or use default value in function body

// Objects
// let employee: { id: number; name?: string } = { id: 1 };
// employee.name = "John"; // error if noImplicitAny is true because name property doesn't exist on employee object
// make sure the code you write make conceptual sense don't just disable the compiler options to get rid of errors, here name is needed for an employee
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "John",
  retire: (date: Date) => {
    console.log(date);
  },
};
// employee.id = 2; // error: cannot reassign a readonly property

employee.retire(new Date());
