interface User {
  name: string;
  age: number;
}

function printUser(user: User): void {
  console.log(user.name.toUpperCase());
  console.log(user.age + 1);
}

const userInput = { name: "Sara", age: Number("25") } as User;
printUser(userInput);
