// Function Declaration
function greet1(name) {
    return `Hello, ${name}!`;
  }
  
  // Function Expression (Anonymous Function)
  const greet2 = function (name) {
    return `Hello, ${name}!`;
  };
  
  // Arrow Function (ES6)
  const greet = (name) => `Hello, ${name}!`;
  
  console.log(greet("Karl-Heinz")); // "Hello, Alice!"