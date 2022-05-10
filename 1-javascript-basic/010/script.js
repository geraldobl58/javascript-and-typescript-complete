const fruits = ['Apple', 'Grape', 'Banana', 'Melon', 'Orange', 'Pineapple']

console.log('############# FOR CLASSIC ######################')

for (let index = 0; index < fruits.length; index++ ) {
  console.log(fruits[index])
}

console.log('############# FOR IN ######################')

for (let index in fruits) {
  console.log(fruits[index])
}

console.log('############# FOR OF ######################')

for (let value of fruits) {
  console.log(value)
}

console.log('############# FOR EACH ######################')

fruits.forEach(function(value, index, array) {
  console.log(index, value, array)
})


console.log(fruits)