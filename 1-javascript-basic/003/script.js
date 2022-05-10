// const date = new Date('1987-04-21: 00:00:00')

// let dayWeek = date.getDay()
// let dayWeekText

// if (dayWeek === 0) {
//   dayWeekText = 'Domingo'
// } else if (dayWeek === 1) {
//   dayWeekText = 'Segunda'
// } else if (dayWeek === 2) {
//   dayWeekText = 'Terça'
// } else if (dayWeek === 3) {
//   dayWeekText = 'Quarta'
// } else if (dayWeek === 4) {
//   dayWeekText = 'Quinta'
// } else if (dayWeek === 5) {
//   dayWeekText = 'Sexta'
// } else if (dayWeek === 6) {
//   dayWeekText = 'Sábado'
// } else {
//   dayWeekText = ''
// }

// console.log(date)
// console.log(dayWeek)
// console.log(dayWeekText)

const date = new Date('2022-04-13: 00:00:00')

let dayWeek = date.getDay()

const result = gerDayWeekText(dayWeek)

function gerDayWeekText(dayWeek) {
  let dayWeekText

  switch (dayWeek) {
    case 0:
      return dayWeekText = 'Domingo'
    case 1:
      return dayWeekText = 'Segunda'
    case 2:
      return dayWeekText = 'Terça'
    case 3:
      return dayWeekText = 'Quarta'
    case 4:
      return dayWeekText = 'Quinta'
    case 5:
      return dayWeekText = 'Sexta'
    case 6:
      return dayWeekText = 'Sábado'
    default:
      break;
  }

  return dayWeekText
}

console.log(`Hoj é ${result}`)



// switch (dayWeek) {
//   case 0:
//     dayWeekText = 'Domingo'
//     break;
//   case 1:
//     dayWeekText = 'Segunda'
//     break;
//   case 2:
//     dayWeekText = 'Terça'
//       break;
//   case 3:
//     dayWeekText = 'Quarta'
//       break;
//   case 4:
//     dayWeekText = 'Quinta'
//       break;
//   case 5:
//     dayWeekText = 'Sexta'
//       break;
//   case 6:
//     dayWeekText = 'Sábado'
//       break;
//   default:
//     break;
// }

// console.log(dayWeek, dayWeekText)