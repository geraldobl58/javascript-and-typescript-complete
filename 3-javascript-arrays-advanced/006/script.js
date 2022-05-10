// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const resultOne = numbers.reduce((acc, value) => {
//   acc += value
//   return acc
// }, 0)

// const resultTwo = numbers.reduce((acc, value) => {
//   if (value % 2 === 0) {
//     acc.push(value)
//   }
//   return acc

// }, [])

// const resultThree = numbers.reduce((acc, value) => {
//   acc.push(value * 2)
//   return acc

// }, [])


// console.log(resultOne)
// console.log(resultTwo)
// console.log(resultThree)
// console.log(numbers)

const person = [
  { name: 'John', age: 30000 },
  { name: 'Jane', age: 50000 },
  { name: 'Mark', age: 18 },
  { name: 'Paul', age: 25 },
  { name: 'Tomy', age: 45 },
  { name: 'Tommy Shelby', age: 45 },
]

const personOdd = person.reduce((acc, value) => {
  if (acc.age > value.age) {
    return acc
  }
  return value
})

console.log(personOdd)
console.log(person)