// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const numberOne = numbers.map(value => value * 2)

// console.log(numberOne)
// console.log(numbers)

const person = [
  { name: 'John', age: 30000 },
  { name: 'Jane', age: 50000 },
  { name: 'Mark', age: 18 },
  { name: 'Paul', age: 25 },
  { name: 'Tomy', age: 45 },
  { name: 'Tommy Shelby', age: 45 },
]

const personOne = person.map(value => value.name)
const personTwo = person.map(value => ({ age: value.age }))
const personThree = person.map((value, index) => {
  const newObject = { ...value }

  newObject.id = index

  return newObject
})

console.log(personOne)
console.log(personTwo)
console.log(personThree)

console.log(person)