const person = {
  // unknown: ''
  firstname: 'John',
  lastname: 'Doe',
  age: 3000000,
  address: {
    street: 'Javascript with typescript',
    number: 8500000
  }
}

const firstname = person.firstname
console.log(firstname)

const { lastname } = person
console.log(lastname)

const { unknown = 'John Doe' } = person
console.log(unknown)

const { address: { street, number }, address } = person
console.log(street, number)
console.log(address)

const { age, ...rest } = person
console.log('REST', age, rest)

console.log(person)