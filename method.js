const person = {
    name: "Sapucaiu no Samba",
    greet: function () {
      return `Hello, my name is ${this.name}`;
    },
  };
  
  console.log(person.greet()); 