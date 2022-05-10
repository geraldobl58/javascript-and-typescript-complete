function fizBuss(number) {
  if (typeof number !== 'number') return number
  if (number % 3 === 0 && number % 5 === 0) return 'FizBuss'
  if (number % 3 === 0) return 'Fizz'
  if (number % 5 === 0) return 'Buzz'

  return number
}

for(let index = 0; index <=100; index++) {
  console.log(fizBuss(index))
}

