function random(min = 0, max = 3) {
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

async function execute() {
  try {
    const result1 = await load('Step One', random())
    console.log(result1)
  
    const result2 = await load('Step Two', random())
    console.log(result2)
  
    const result3 = await load('Step Three', random())
    console.log(result3)
  
    console.log('Finish Response')
  } catch (error) {
    console.log(erro)
  }
}

execute()