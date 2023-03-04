const h1Selected = document.querySelector('h1')

h1Selected.classList.add('titulo')

console.log(h1Selected)

// Retorne o url da página atual utilizando o objeto window

const urlAtual = location.href
console.log(urlAtual)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

console.log(document.getElementsByClassName('ativo'))

// Retorne a linguagem do navegador

const htmlLang = document.getElementsByTagName('html')
console.log(window.navigator.language)

// Retorne a largura da janela 

console.log(window.innerWidth)