const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numbersFormatted = numbers
  .filter(value => value % 2 === 0)
  .map(value => value * 2)
  .reduce((acc, value) => acc + value)

console.log(numbersFormatted)