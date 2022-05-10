const fruits = ['Apple', 'Grape', 'Banana']

for (let index = 0; index <= 10; index++) {
  console.log(index)
}

for (let index = 0; index <= 10; index++) {
  const jump = index % 2 === 0 ? 'Pair' : 'Odd'
  console.log(index, jump)
}

for (let index = 0; index < fruits.length; index++) {
  console.log('FRUITS', fruits[index])
}

console.log(fruits)
console.log(fruits.length)