"use strict";
var _a, _b;
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
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
customer = getCustomer(1);
console.log((_b = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _b === void 0 ? void 0 : _b.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("Hello world");
