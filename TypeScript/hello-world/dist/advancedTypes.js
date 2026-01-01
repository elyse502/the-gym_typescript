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
