// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acc, item) => {
  return acc + item.innerText.length
}, 0)

console.log(totalCaracteres)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function newHtml(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerHTML = conteudo : null
  return elemento
}

console.log(newHtml('li', 'item', 'olá'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = newHtml.bind(null, 'h1', 'titulo')
console.log(h1Titulo('Pelamordedeus'))