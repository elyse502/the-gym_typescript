type User1 = {
  id: number;
  name: string;
  isAdmin: boolean;
};

function getCurrentUser(): User1 | undefined {
  if (Math.random() > 0.5) {
    return { id: 1, name: "Alice", isAdmin: true };
  } else {
    return undefined;
  }
}

// Example usage
const user = getCurrentUser();
if (user) {
  console.log(`User: ${user.name}, Admin: ${user.isAdmin}`);
} else {
  console.log("No user found");
}
