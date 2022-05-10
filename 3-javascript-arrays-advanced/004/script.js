const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numbersFilter = numbers.filter(value => value > 10)

console.log(numbersFilter)
console.log(numbers)

const person = [
  { name: 'John', age: 30000 },
  { name: 'Jane', age: 50000 },
  { name: 'Mark', age: 18 },
  { name: 'Paul', age: 25 },
  { name: 'Tomy', age: 45 },
  { name: 'Tommy Shelby', age: 45 },
]

const myNameOne = person.filter(value => value.name.length >= 5)
const myNameTwo = person.filter(value => value.age > 50)
const myNameThree = person.filter(value => value.name.toLowerCase().endsWith('y') )

console.log(myNameOne)
console.log(myNameTwo)
console.log(myNameThree)

console.log(person)