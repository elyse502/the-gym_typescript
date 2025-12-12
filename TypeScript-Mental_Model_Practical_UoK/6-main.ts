type Result = "pending" | "approved" | "rejected";

function evaluateScore(score: number): Result {
  if (score > 90) return "approved";
  if (score > 70) return "pending";
  return "rejected";
}

console.log(evaluateScore(95)); // "approved"
console.log(evaluateScore(80)); // "pending"
console.log(evaluateScore(60)); // "rejected"
console.log(evaluateScore(71)); // "pending"
console.log(evaluateScore(90)); // "pending" (not > 90)
