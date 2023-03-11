const cursosEl = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursosEl)

const objetoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').textContent
  const descricao = curso.querySelector('p').textContent
  const aulas = curso.querySelector('.aulas').textContent
  const horas = curso.querySelector('.horas').textContent
  return {
    titulo: titulo,
    descricao: descricao,
    aulas: aulas,
    horas: horas
  }
})

console.log(objetoCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresCem = numeros.filter(numero => numero > 100)

console.log(maioresCem)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const contemBaixo = instrumentos.some(instrumento => instrumento === "Baixo")

console.log(contemBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorCompras = compras.reduce((ac, item) => {
  const preco = +item.preco.replace('R$ ', '').replace(',', '.')
  return ac + preco;
}, 0)

console.log(valorCompras)