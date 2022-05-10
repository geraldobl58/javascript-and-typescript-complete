// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const [one, two, ...rest] = numbers
// const [three, , four, , five] = numbers

// console.log(numbers)
// console.log(one, two)
// console.log(...rest)
// console.log(one, two, ...rest)
// console.log(three, four, five)

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const [one, two, three] = numbers

console.log(numbers[1][2])
console.log(two[0])

console.log(numbers)