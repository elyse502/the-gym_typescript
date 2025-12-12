type Action =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number };

// Solution 1: Create proper Action object (correct values)
const action: Action = {
  type: "ADD_TODO",
  text: "Learn TypeScript", // Changed from number to string
};

// Solution 2: Function to create actions with validation
function createAction(type: "ADD_TODO", text: string): Action;
function createAction(type: "TOGGLE_TODO" | "DELETE_TODO", id: number): Action;
function createAction(type: Action["type"], payload: string | number): Action {
  if (type === "ADD_TODO") {
    return { type, text: payload as string };
  } else {
    return { type, id: payload as number } as Action;
  }
}

const action2 = createAction("ADD_TODO", "Complete challenge");
const action3 = createAction("TOGGLE_TODO", 42);

// Solution 3: Action creators (Redux pattern)
const addTodo = (text: string): Action => ({
  type: "ADD_TODO",
  text,
});

const toggleTodo = (id: number): Action => ({
  type: "TOGGLE_TODO",
  id,
});

const deleteTodo = (id: number): Action => ({
  type: "DELETE_TODO",
  id,
});

const action4 = addTodo("Fix TypeScript errors");
const action5 = toggleTodo(123);

// Usage
function dispatch(action: Action) {
  console.log("Dispatching:", action);
  // Handle action based on type
  switch (action.type) {
    case "ADD_TODO":
      console.log(`Adding todo: ${action.text}`);
      break;
    case "TOGGLE_TODO":
      console.log(`Toggling todo ID: ${action.id}`);
      break;
    case "DELETE_TODO":
      console.log(`Deleting todo ID: ${action.id}`);
      break;
  }
}

dispatch(action);
dispatch(action2);
dispatch(action4);
dispatch(action5);
