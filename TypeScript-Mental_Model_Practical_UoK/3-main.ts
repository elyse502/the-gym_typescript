type ID = string | number;

function getLength(id: ID): number {
  if (typeof id === "string") {
    return id.length;
  } else {
    return id.toString().length;
  }
}

console.log(getLength(123));
console.log(getLength("abc"));
