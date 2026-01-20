// 1. Solve all the typing issues in the code without changing the implementation

// const setRange = (range: number): number => {
//   const x = range[0];
//   const y = range[1];

//   return { x, y: y.age > 10 };
// };

// setRange([true, { name: 'Patrick', age: 3}]);

type Result = {
  x: boolean;
  y: boolean;
};

const setRange = (range: [boolean, { name: string; age: number }]): Result => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

console.log(setRange([true, { name: "Patrick", age: 3 }]));

console.log();

// 2. Solve all the typing issues in the code without changing the implementation

// const sendMessage = (message: { to: string; text?: string }) => {
//   return message.text.toUpperCase();
// };

// sendMessage({ to: 'Alice' });

const sendMessage = (message: { to: string; text?: string }) => {
  return message.text?.toUpperCase();
};

console.log(sendMessage({ to: "Alice" }));

console.log();

// 3. The following function is meant to log the city for a customer’s shipping address.
//  However, the code is unsafe and may throw runtime errors due to missing or undefined properties.

// Without changing the logic of the function, fix the typing issues and make the function
// safe using proper TypeScript types.

interface User {
  customer: {
    name: string;
    address?: {
      city: string;
    };
  };
}

const logOrder = (order: User) => {
  console.log(`Shipping to: ${order.customer.address?.city}`);
};

logOrder({
  customer: {
    name: "Jane",
    // address is missing
  },
});
