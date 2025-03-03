# Basic Terminology (definition, examples etc.)

## 1. Functions

A function is a block of reusable code that performs a specific task.

🔹 Ways to Write Functions:

```js
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression (Anonymous Function)
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Arrow Function (ES6)
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Alice")); // "Hello, Alice!"
```

Functions return values and can be reused.

## 2. Methods

A method is just a function inside an object.

- example:

```js
const person = {
  name: "Alice",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

console.log(person.greet()); // "Hello, my name is Alice"
```

## 3. Objects

An object is a collection of key-value pairs.

🔹 Creating Objects

```javascript
const user = {
  name: "John",
  age: 30,
  isAdmin: true,
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

console.log(user.name); // "John"
console.log(user["age"]); // 30
console.log(user.greet()); // "Hi, I'm John"
```
