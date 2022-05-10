// const h1 = document.querySelector('.container h1')
// const date = new Date()

// let dayWeek = date.getDay()

// const result = gerDayWeekText(dayWeek)

// function gerDayWeekText(dayWeek) {
//   let dayWeekText

//   switch (dayWeek) {
//     case 0:
//       return dayWeekText = 'Domingo'
//     case 1:
//       return dayWeekText = 'Segunda-feira'
//     case 2:
//       return dayWeekText = 'Terça-feira'
//     case 3:
//       return dayWeekText = 'Quarta-feira'
//     case 4:
//       return dayWeekText = 'Quinta-feira'
//     case 5:
//       return dayWeekText = 'Sexta-feira'
//     case 6:
//       return dayWeekText = 'Sábado'
//     default:
//       break;
//   }

//   return dayWeekText
// }

// function getNameMonth(numberMonth) {
//   let nameMonth

//   switch (numberMonth) {
//     case 0:
//       return nameMonth = 'Janeiro'
//     case 1:
//       return nameMonth = 'Fevereiro'
//     case 2:
//       return nameMonth = 'Março'
//     case 3:
//       return nameMonth = 'Abril'
//     case 4:
//         return nameMonth = 'Maio'
//     case 5:
//       return nameMonth = 'Junho'
//     case 6:
//       return nameMonth = 'Julho'
//     case 7:
//       return nameMonth = 'Agosto'
//     case 8:
//       return nameMonth = 'Setembro'
//     case 9:
//       return nameMonth = 'Outubro'
//     case 10:
//       return nameMonth = 'Novembro'
//     case 11:
//       return nameMonth = 'Dezembro'
//     default:
//       break;
//   }

//   return nameMonth
// }

// function incrementLeftZero(number) {
//   return number >= 10 ? number : `0${number}`
// }

// function dateCreated(date) {
//   const dayWeek = date.getDay()
//   const numberMonth = date.getMonth()

//   const nameDay = gerDayWeekText(dayWeek)
//   const nameMonth = getNameMonth(numberMonth)

//   return (
//     `${nameDay}, ${date.getDate()} de ${nameMonth}` + 
//     ` de ${date.getFullYear()} 
//     ${incrementLeftZero(date.getHours())}:${incrementLeftZero(date.getMinutes())}:${incrementLeftZero(date.getSeconds())}`
//   )
// }

// h1.innerHTML = dateCreated(date)


const h1 = document.querySelector('.container h1')
const date = new Date()

let dayWeek = date.getDay()

const result = gerDayWeekText(dayWeek)

function gerDayWeekText(dayWeek) {
  const daysWeek = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ]

  return daysWeek[dayWeek]
}

function getNameMonth(numberMonth) {
  const months = [
    'Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro', 
    'Dezembro'
  ]

  return months[numberMonth]
}

function incrementLeftZero(number) {
  return number >= 10 ? number : `0${number}`
}

function dateCreated(date) {
  const dayWeek = date.getDay()
  const numberMonth = date.getMonth()

  const nameDay = gerDayWeekText(dayWeek)
  const nameMonth = getNameMonth(numberMonth)

  return (
    `${nameDay}, ${date.getDate()} de ${nameMonth}` + 
    ` de ${date.getFullYear()} 
    ${incrementLeftZero(date.getHours())}:${incrementLeftZero(date.getMinutes())}:${incrementLeftZero(date.getSeconds())}`
  )
}

h1.innerHTML = dateCreated(date)


// const h1 = document.querySelector('.container h1')
// const date = new Date()

// const options = {
//   dateStyle: 'full',
//   timeStyle: 'full'
// }

// h1.innerHTML = date.toLocaleString('pt-BR', options)