type Value = string | null | undefined;

function logLength(value: Value): void {
  if (value !== null && value !== undefined) {
    console.log(value.length);
  } else {
    console.log("Value is null or undefined");
  }

  // Alternative with optional chaining and nullish coalescing:
  /*const length = value?.length ?? "Value is null or undefined";
  console.log(length);*/
}

logLength("hello"); // 5
logLength(""); // 0 (empty string is valid)
logLength(null); // "Value is null or undefined"
logLength(undefined); // "Value is null or undefined"
