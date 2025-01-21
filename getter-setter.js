const obj = {
    // Getter
    get propertyName() {
      // Code to return a value
      return this._propertyName;
    },
  
    // Setter
    set propertyName(value) {
      // Code to set a value
      this._propertyName = value;
    }
  };
  
  // Usage
  obj.propertyName = 'value'; // Invokes the setter
  console.log(obj.propertyName); // Invokes the getter

  const person = {
    firstName: 'John',
    lastName: 'Doe',
    
    // Getter for fullName
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    
    // Setter for fullName
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(' ');
    }
  };
  
  console.log(person.fullName); // "John Doe"
  person.fullName = 'Jane Smith';
  console.log(person.firstName); // "Jane"
  console.log(person.lastName);  // "Smith"
  function recursive() {
    recursive(); // Calls itself indefinitely
  }
  
  recursive(); // Results in a stack overflow
  function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorialIterative(5)); // 120
  