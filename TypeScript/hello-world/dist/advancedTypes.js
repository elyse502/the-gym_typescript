"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    id: 1,
    name: "John",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
let textBox = {
    drag: () => {
        console.log("Dragging...");
    },
    resize: () => {
        console.log("Resizing...");
    },
};
console.log(textBox);
let quantity = 100;
let unit = "cm";
function greet(name) {
    if (name)
        console.log("Hello " + name.toUpperCase() + "!");
    else
        console.log("Hello!");
}
greet(null);
greet(undefined);
greet("Elysee");
