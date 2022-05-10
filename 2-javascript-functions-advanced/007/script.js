function createPerson(firstname, lastname, tech) {
  return {
    firstname,
    lastname,
    tech,

    call: function(subject) {
      return `${this.firstname} está ${subject} sobre ${tech}`
    }

  }
}

const myFunction = createPerson('John', 'Doe', 'javascript')
console.log(myFunction.call('falando'))