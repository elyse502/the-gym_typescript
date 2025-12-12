type Admin = { role: "admin"; permissions: string[] };
type Guest = { role: "guest"; sessionId: string };
type User2 = Admin | Guest;

function greet1(user: User2): void {
  if (user.role === "admin") {
    console.log("Welcome admin, permissions:", user.permissions);
  } else {
    console.log("Welcome guest, session:", user.sessionId);
  }
}

// Test cases
const adminUser: User2 = { role: "admin", permissions: ["read", "write"] };
const guestUser: User2 = { role: "guest", sessionId: "abc123" };

greet1(adminUser);
greet1(guestUser);
