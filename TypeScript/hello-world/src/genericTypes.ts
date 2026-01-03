/* function getFirstElement(array: number[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);
console.log(firstNum);

const strings = ["sdf", "sdfsd", "sdfsdf"];
const firstString = getFirstElement(strings); // Error */

// Generic Types - whenever you have a type that needs to conform to the data being passed in or the data being returned or just used in some way in that function, you can use generics
function getFirstElement<ElementType>(array: ElementType[]) {
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

// Generic Types with Objects - working with api response
type ApiResponse<Data = { status: number; message: string }> = {
  data: Data;
  isError: boolean;
};

const response1: ApiResponse = {
  data: {
    status: 200,
    message: "Success",
  },
  isError: false,
};
console.log(response1.data.status);

type UserResponse = ApiResponse<{ name: string; age: number }>;

const response: UserResponse = {
  data: {
    name: "John",
    age: 30,
  },
  isError: false,
};
console.log(response.data.name);

type BlogResponse = ApiResponse<{ title: string }>;

const responseBlog: BlogResponse = {
  data: {
    title: "My Blog Post",
  },
  isError: false,
};
console.log(responseBlog.data.title);

const stringResponse: ApiResponse<string[]> = {
  data: ["sdf", "sdfsd", "sdfsdf"],
  isError: false,
};
console.log(stringResponse.data[0]);

const numberResponse: ApiResponse<number[]> = {
  data: [0, 2, 3],
  isError: false,
};
console.log(numberResponse.data[0]);

const booleanResponse: ApiResponse<boolean[]> = {
  data: [true, false, true],
  isError: false,
};
console.log(booleanResponse.data[0]);

const mixedResponse: ApiResponse<(string | number | boolean)[]> = {
  data: [1, "sdf", true],
  isError: false,
};
console.log(mixedResponse.data[0]);

const emptyResponse: ApiResponse<null> = {
  data: null,
  isError: false,
};
console.log(emptyResponse.data);

const undefinedResponse: ApiResponse<undefined> = {
  data: undefined,
  isError: false,
};
console.log(undefinedResponse.data);

type ApiResponse1<Data extends object> = {
  data: Data;
  isError: boolean;
};

const responseObj: ApiResponse1<{ id: number; title: string }> = {
  data: {
    id: 1,
    title: "My Blog Post Object",
  },
  isError: false,
};
console.log(responseObj.data.title);
