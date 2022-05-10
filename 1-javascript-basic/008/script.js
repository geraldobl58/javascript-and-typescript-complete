const elements = [
  { tag: 'p', text: 'Text 1' },
  { tag: 'div', text: 'Text 2' },
  { tag: 'footer', text: 'Text 3' },
  { tag: 'section', text: 'Text 4' }
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let index = 0; index < elements.length; index++) {
  let { tag, text } = elements[index]
  let paragraphCreated = document.createElement(tag)

  paragraphCreated.innerText = text
  div.appendChild(paragraphCreated)
}

container.appendChild(div)

console.log(elements)