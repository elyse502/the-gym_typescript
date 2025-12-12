const scores: (string | number)[] = [95, "100", 87];
scores.push(82);

const total = scores.reduce((sum: number, item: string | number) => {
  const num = typeof item === "string" ? Number(item) : item;
  return sum + num;
}, 0);

console.log(total);
