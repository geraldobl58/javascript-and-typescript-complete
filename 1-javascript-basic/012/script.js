// const fullname = 'John'

// let index = 0

// while(index <= 10) {
//   console.log(index)
//   index++
// }

// while(index < fullname.length) {
//   console.log(fullname[index])
//   index++
// }

function randomNumbers(min, max) {
  const numbers = Math.random() * (max - min) + min
  return Math.floor(numbers)
}

const min = 1 
const max = 50 

let result = randomNumbers(min, max)


while (result !== 10) {
  result = randomNumbers(min, max)
  console.log(result)
}

console.log(result)