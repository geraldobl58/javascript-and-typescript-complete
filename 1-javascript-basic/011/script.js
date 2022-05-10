const paragraph = document.querySelector('.paragraph')
const ps = paragraph.querySelectorAll('p')

const stylesBody = getComputedStyle(document.body)
const bkColor = stylesBody.backgroundColor

console.log(bkColor)

for (let p of ps) {
  p.style.backgroundColor = bkColor
  p.style.color = '#fff'
}