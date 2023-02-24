const imagens = document.querySelectorAll('#galeria li img')

function galeriaTrocar(event) {
  const principal = document.querySelector('#imagem-principal')
  const clicada = event.currentTarget
  clicada.classList.toggle('border')
  principal.src = clicada.src
}

function galeriaClique(imagem) {
  imagem.addEventListener('click', galeriaTrocar)
}

imagens.forEach(galeriaClique)