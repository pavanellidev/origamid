// // Verifique a distância da primeira imagem
// // em relação ao topo da página
// const primeiraImg = document.querySelector('img')
// console.log(primeiraImg.offsetTop)

// // Retorne a soma da largura de todas as imagens
// const imagens = document.querySelectorAll('img')
// let soma = 0

// imagens.forEach((img) => {
//   img.getBoundingClientRect
//   soma = soma + img.width
// })

// console.log(soma)

// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu
// const menuMobile = document.querySelector('.menu')
// const small = window.matchMedia('(max-width: 720px)')
// console.log(small)

// if (small.matches) {
//   menuMobile.classList.add('menu-mobile')
// } else {
//   menuMobile.classList.remove('menu-mobile')
// }


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]')

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    links.forEach((link) => {
      link.classList.remove('ativo')
    })
    e.currentTarget.classList.add('ativo')
  })
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const elementos = document.querySelectorAll('body *')
// elementos.forEach((elemento) => {
//   elemento.addEventListener('click', (e) => {
//     elemento.remove()
//   })
// })


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

document.addEventListener('keypress', (e) => {
  const paragrafo = document.querySelectorAll('p')
  if(e.key === 't') {
    paragrafo.forEach((p) => {
      p.style.fontSize = '24px'
    })
  }
})