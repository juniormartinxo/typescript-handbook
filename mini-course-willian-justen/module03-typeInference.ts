// Mesmo não sendo declarado o Typescript consegue entender os tipos sem a necessidade de ficar declarando
let isString = 'Isto é uma string para o Typescript'
isString = 'Ainda é uma string para o Typescript'

window.addEventListener('click', e => {
  // aqui o Typescript sabe que se trata de um Mouse event
  console.log(e.target)
})
