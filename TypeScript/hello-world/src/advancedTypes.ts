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
