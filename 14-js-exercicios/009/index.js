// Crie um objeto com os seus dados pessoais
var pessoa = {
  nome: 'André',
  sobrenome: 'Pavanelli',
  altura: 1.75,
  peso: 90,
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  }
}

// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var labrador = {
  nome: 'Rex',
  cor: 'preto',
  idade: 10,
  viuHomem () {
    console.log ('Au Au')
  }
}
