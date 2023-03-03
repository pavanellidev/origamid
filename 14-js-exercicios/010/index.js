// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copas = [1959, 1962, 1970, 1994, 2002]

copas.forEach(function(copa){
  console.log(`O Brasil ganhou a copa de ${copa}`)
})

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if(frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length-1]

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500

console.log(scroll)
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito;

if(possuiCarro && possuiCasa) {
  darCredito = true
} else {
  darCredito = false
}

console.log(darCredito)