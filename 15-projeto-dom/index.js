function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  tabContent[0].classList.add('ativo')

  if(tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabNav()


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')

  if(accordionList.length) {
    function activeAccordion() {
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion()

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  linksInternos.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute('href')
      const section = document.querySelector(href)
      const topo = section.offsetTop

      window.scrollTo({
        top: topo,
        behavior: "smooth"
      })
    })
  })
}
initScrollSuave()

const sections = document.querySelectorAll('.js-scroll')

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    if(sectionTop < 0) {
      section.classList.add('ativo')
    }
  })
}

window.addEventListener('scroll', animaScroll)