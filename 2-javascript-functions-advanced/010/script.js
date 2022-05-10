function* generate() {
  yield 'Value One'
  yield 'Value Two'
  yield 'Value Three'
}

const my = generate()

for(let value of my) {
  console.log(value)
}

function* generatenew() {
  let index = 0

  while(true) {
    yield index
    index++
  }
}

const mytwo = generatenew()
console.log(mytwo.next().value)
console.log(mytwo.next().value)