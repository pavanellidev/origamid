function livro (nome, ano, autor) {
 
  return {
    nome: nome.toUpperCase(),
    anosDesde: 2023 - ano,
    frase: nome + ' por ' + autor
  }
  
}


const livroRetorno = livro('desaparecido', 1997, 'harlan')

console.log(livroRetorno);