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
  console.log(user.isAdmin); // true