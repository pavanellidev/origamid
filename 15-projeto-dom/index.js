// // Mostre no console cada parágrado do site
// const paragrafos = document.querySelectorAll('p')

// paragrafos.forEach((paragrafo) => {
//   console.log(paragrafo.innerText)
// })

// // Mostre o texto dos parágrafos no console

// // Como corrigir os erros abaixo:

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// Adicione a classe ativo a todos os itens do menu

const menuItems = document.querySelectorAll('.menu a')
menuItems.forEach((item) => {
  item.classList.add('ativo')
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((item, index) => {
  if(index !== 0) {
    item.classList.remove('ativo')
  } 
})

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')

imagens.forEach((imagem) => {
  console.log(imagem.hasAttribute('alt'))
})

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('[href^="https://www.or"]')
linkExterno.setAttribute('href', 'http://www.google.com')
console.log(linkExterno)