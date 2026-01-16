"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setRange = (range) => {
    const x = range[0];
    const y = range[1];
    return { x, y: y.age > 10 };
};
console.log(setRange([true, { name: "Patrick", age: 3 }]));
