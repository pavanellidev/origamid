const bolaEl = document.querySelector('.bola')

window.addEventListener('mousemove', (e) => {
  const cordX = e.x
  const cordY = e.y
  bolaEl.style.top = `${cordY}px`
  bolaEl.style.left = `${cordX}px`
})