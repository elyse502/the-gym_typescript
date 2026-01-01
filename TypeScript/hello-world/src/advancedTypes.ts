/* let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "John",
  retire: (date: Date) => {
    console.log(date);
  },
}; */

// Type Aliases - create your own types
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "John",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee);

// Union Types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

// Intersection Types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {
    console.log("Dragging...");
  },
  resize: () => {
    console.log("Resizing...");
  },
};

console.log(textBox);

// Literal Types (exact, specific values)
// let quantity: 50 | 100 = 1000;
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";
let unit: Metric = "cm";

// Nullable Types
function greet(name: string | null | undefined) {
  if (name) console.log("Hello " + name.toUpperCase() + "!");
  else console.log("Hello!");
}

greet(null);
greet(undefined);
greet("Elysee");

// Optional Chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());
customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.("Hello world");
