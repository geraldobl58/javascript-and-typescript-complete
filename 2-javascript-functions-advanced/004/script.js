function createFunction(fullname) {
  return function() {
    return fullname
  }
}

const myFunctionOne = createFunction('John Doe')
const myFunctionTwo = createFunction('Jane Doe')

console.log(myFunctionOne())
console.log(myFunctionTwo())