const buttonEl = document.querySelector('.btn')
const divEl = document.querySelector('div')

buttonEl.addEventListener('click', () => {
  if (divEl.innerHTML < 10) {
    divEl.innerHTML = parseFloat(divEl.innerHTML) + 1
  } else {
    alert('Só vai até 10')
  }
})