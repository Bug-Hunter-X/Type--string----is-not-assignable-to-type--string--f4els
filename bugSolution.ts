function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
// Solution 1: Type Assertion
console.log(greeter(user as string));
// Solution 2: Array Destructuring
console.log(greeter(user[0]));