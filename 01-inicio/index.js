const title = document.querySelector('.title')

function changeColor() {
  document.querySelector('.title').style.color = 'red'
}

title.addEventListener('click', changeColor)