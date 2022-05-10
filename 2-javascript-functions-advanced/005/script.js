function ramdomNumbers(min = 1000, max = 3000) {
  const number = Math.random() * (max - min) + min

  return Math.floor(number)
}

function myFunctionOne(callback) {
  setTimeout(function() {
    console.log('Myfunction One')
    if (callback) callback()
  }, ramdomNumbers())
}

function myFunctionTwo(callback) {
  setTimeout(function() {
    console.log('Myfunction Two')
    if (callback) callback()
  }, ramdomNumbers())
}

function myFunctionThree(callback) {
  setTimeout(function() {
    console.log('Myfunction Three')
    if (callback) callback()
  }, ramdomNumbers())
}

myFunctionOne(callbackOne)

function callbackOne() {
  myFunctionTwo(callbackTwo)
}

function callbackTwo() {
  myFunctionThree(callbackThree)
}

function callbackThree() {
  console.log('Finished!!!')
}