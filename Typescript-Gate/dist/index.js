"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setRange = (range) => {
    const x = range[0];
    const y = range[1];
    return { x, y: y.age > 10 };
};
console.log(setRange([true, { name: "Patrick", age: 3 }]));
console.log();
const sendMessage = (message) => {
    var _a;
    return (_a = message.text) === null || _a === void 0 ? void 0 : _a.toUpperCase();
};
console.log(sendMessage({ to: "Alice" }));
