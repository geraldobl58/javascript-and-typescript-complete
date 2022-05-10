const fruits = ['Apple', 'Grape', 'Banana', 'Melon', 'Orange', 'Pineapple']

const person = {
  firstname: 'John',
  lastname: 'Doe',
  age: 300000000000000
}

for (let index in fruits) {
  console.log('FRUITS ARRAY', fruits[index])
}

for (let key in person) {
  console.log('PERSON KEY OBJECT', person[key])
}

// console.log(fruits)
// console.log(person)
// console.log(person['lastname'])