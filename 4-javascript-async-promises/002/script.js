function random(min, max) {
  min *= 1000
  max *= 1000

  return Math.floor(Math.random() * (max - min) + min)
}

function load(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      return reject('Whoops: BADDDDDD Four Error')
    }

    setTimeout(() => {
      resolve(msg)
    }, time)
  })
}

load('Step One', random(1, 3))
  .then((response) => {
    console.log(response)
    return load('Step Two', random(1, 3))
  })
  .then((response) => {
    console.log(response)
    return load('Step Three', random(1, 3))
  })
  .then((response) => {
    console.log(response)
    return load(123456, random(1, 3))
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })
  .then(() => {
    console.log('Finish Response')
  })

  const promises = [
    'First Value',
    load('Step One', 3000),
    load('Step Two', 500),
    load('Step Three', 1000),
    'Other Value'
  ]

  Promise.all(promises)
    .then(function(value) {
      console.log(value)
    })
    .catch(function(error) {
      console.log(error)
    })