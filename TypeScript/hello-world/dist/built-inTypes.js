"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numbers1 = [];
numbers1.forEach((n) => n.toFixed);
let user = [1, "John"];
user[1].charAt(0);
user.push(0);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000, 2021));
console.log(calculateTax(10000, 2022));
console.log(calculateTax(10000));
let employee = {
    id: 1,
    name: "John",
    retire: (date) => {
        console.log(date);
    },
};
employee.retire(new Date());
