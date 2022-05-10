function sum(x, y) {
  return x + y
}

console.log(sum(1, 5))

function createPerson(firstname, lastname) {
  return { firstname, lastname }
}

const person = createPerson('John', 'Doe')
console.log(person)

function text(initial) {
  function restt(rest) {
    return initial + ' ' + rest
  }
  return restt
}

const hello = text('Hello')

console.log(hello('World'))