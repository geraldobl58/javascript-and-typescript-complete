function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname; 
}

const myFunction = new Person('John', 'Doe')

console.log(myFunction)
console.log(myFunction.firstname)
console.log(myFunction.lastname)