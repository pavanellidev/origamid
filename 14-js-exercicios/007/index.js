// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var suaIdade = Number(prompt('Qual é a sua idade?'))
var idadePrimo = Number(prompt('Qual é a idade do seu primo?'))

if(suaIdade > idadePrimo) {
  alert('Você é mais velho que seu primo.')
} else if(suaIdade === idadePrimo) {
  alert('Vocês tem a mesma idade.') 
} else {
  alert ('Você é mais novo que seu primo.')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; //true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console? - falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? - cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}