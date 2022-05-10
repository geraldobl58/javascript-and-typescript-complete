// const date = new Date()
// const date = new Date(2022, 3, 13, 08, 46)
// const date = new Date('2020-04-13 08:50:55')

// console.log(date)
// console.log(date.toString()) // convert to string

// console.log('Dia', date.getDate())
// console.log('Mês', date.getMonth() + 1)
// console.log('Ano', date.getFullYear())
// console.log('Hora', date.getHours())
// console.log('Minutos', date.getMinutes())
// console.log('Segundos', date.getSeconds())
// console.log('Milesegundos', date.getMilliseconds())
// console.log('Dia Semana', date.getDay())
// console.log(Date.now())

const date = new Date()

function incrementLeftZero(number) {
  return number >= 10 ? number : `0${number}`
}

function dateFoamtted(date) {
  const day = incrementLeftZero(date.getDate())
  const month = incrementLeftZero(date.getMonth() + 1)
  const year = incrementLeftZero(date.getFullYear())
  const hour = incrementLeftZero(date.getHours())
  const minutes = incrementLeftZero(date.getMinutes())
  const seconds = incrementLeftZero(date.getSeconds())

  return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
}

const dateFormattedBrazialian = dateFoamtted(date)

console.log(dateFormattedBrazialian)