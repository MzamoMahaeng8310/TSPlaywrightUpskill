"use strict";
// A function with typed parameters and return value
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName}!`;
}
// Create an object that matches the interface
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
// Output the greeting
console.log(greet(user));
