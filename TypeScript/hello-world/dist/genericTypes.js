"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstElement(array) {
    return array[0];
}
const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);
console.log(firstNum);
const strings = ["sdf", "sdfsd", "sdfsdf"];
const firstString = getFirstElement(strings);
console.log(firstString);
const booleans = [true, false, true];
const firstBoolean = getFirstElement(booleans);
console.log(firstBoolean);
const mixed = [1, "sdf", true];
const firstMixed = getFirstElement(mixed);
console.log(firstMixed);
console.log();
console.log("--- Generic Types with Objects - working with api response ---");
const response1 = {
    data: {
        status: 200,
        message: "Success",
    },
    isError: false,
};
console.log(response1.data.status);
const response = {
    data: {
        name: "John",
        age: 30,
    },
    isError: false,
};
console.log(response.data.name);
const responseBlog = {
    data: {
        title: "My Blog Post",
    },
    isError: false,
};
console.log(responseBlog.data.title);
const stringResponse = {
    data: ["sdf", "sdfsd", "sdfsdf"],
    isError: false,
};
console.log(stringResponse.data[0]);
const numberResponse = {
    data: [0, 2, 3],
    isError: false,
};
console.log(numberResponse.data[0]);
const booleanResponse = {
    data: [true, false, true],
    isError: false,
};
console.log(booleanResponse.data[0]);
const mixedResponse = {
    data: [1, "sdf", true],
    isError: false,
};
console.log(mixedResponse.data[0]);
const emptyResponse = {
    data: null,
    isError: false,
};
console.log(emptyResponse.data);
const undefinedResponse = {
    data: undefined,
    isError: false,
};
console.log(undefinedResponse.data);
const responseObj = {
    data: {
        id: 1,
        title: "My Blog Post Object",
    },
    isError: false,
};
console.log(responseObj.data.title);
