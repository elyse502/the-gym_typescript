function greet(name: string): string {
  return "Hello " + name.toUpperCase();
}

const names: (string | number)[] = ["alice", "bob", 123];
names.forEach((name) => {
  if (typeof name === "string") {
    console.log(greet(name));
  } else {
    console.log(`Invalid name: ${name}`);
  }
});
