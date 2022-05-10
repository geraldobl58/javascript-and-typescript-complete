(function() {
  const lastname = 'Doe'

  function createdName(firstname) {
    return `${firstname} ${lastname}`
  }

  function callName() {
    console.log(createdName('John'))
  }

  callName()

})()

function out() {
  const out = 'Fora do IIFE'
  return out
}
console.log(out())