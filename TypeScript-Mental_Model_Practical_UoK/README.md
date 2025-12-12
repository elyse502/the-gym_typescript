<h1 align="center"><sup>🧠</sup><i>TypeScript Mental Model Practical UoK</i><sub>🧩</sub></h1>

The following code snippets have TypeScript errors. Fix the code **without changing the core implementation of the functions** until it compiles AND runs correctly (no `any`, no `@ts-ignore` allowed unless explicitly permitted).

1. [0-main.ts](0-main.ts)

```tsx
function greet(name) {
  return "Hello " + name.toUpperCase();
}

const names = ["alice", "bob", 123];
names.forEach(greet);
```

2. [1-main.ts](1-main.ts)

```tsx
const scores: number[] = [95, "100", 87];
scores.push(82);
console.log(scores.reduce((a, b) => a + b));
```

3. [2-main.ts](2-main.ts)

```tsx
function printUser(user) {
  console.log(user.name.toUpperCase());
  console.log(user.age + 1);
}

printUser({ name: "Sara", age: "25" });
```

4. [3-main.ts](3-main.ts)

```tsx
type ID = string | number;

function getLength(id: ID) {
  return id.length;
}

getLength(123);
getLength("abc");
```

5. [4-main.ts](4-main.ts)

```tsx
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

function getCurrentUser(): User {
  if (Math.random() > 0.5) {
    return { id: 1, name: "Alice", isAdmin: true };
  }
}
```

6. [5-main.ts](5-main.ts)

```tsx
type Admin = { role: "admin"; permissions: string[] };
type Guest = { role: "guest"; sessionId: string };
type User = Admin | Guest;

function greet(user: User) {
  if (user.role === "admin") {
    console.log("Welcome admin, permissions:", user.sessionId);
  }
}
```

7. [6-main.ts](6-main.ts)

```tsx
type Result = "pending" | "approved" | "rejected";

function evaluateScore(score: number): Result {
  if (score > 90) return "approved";
  if (score > 70) return "pending";
  return "denied";
}
```

8. [7-main.ts](7-main.ts)

```tsx
type Value = string | null | undefined;

function logLength(value: Value) {
  if (value) {
    console.log(value.length);
  }
}
```

9. [8-main.ts](8-main.ts)

```tsx
type ApiResponse =
  | { success: true; data: string }
  | { success: false; error: string };

async function fetchData(id: number): Promise<ApiResponse> {
  const res = await fetch(`/api/data/${id}`);
  const json = await res.json();
  return json;
}
```

10. [9-main.ts](9-main.ts)

```tsx
type Profile = {
  name: string;
  settings?: {
    theme: "dark" | "light";
    notifications: boolean;
  };
};

const profiles: Profile[] = [
  { name: "Bob" },
  { name: "Carla", settings: { theme: "dark", notifications: true } },
];

profiles.forEach((p) => {
  console.log(p.settings.theme.toUpperCase());
});
```

11. [10-main.ts](10-main.ts)

```tsx
type Action =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number };

const action = { type: "ADD_TODO", text: 123 } as Action;
dispatch(action);
```
