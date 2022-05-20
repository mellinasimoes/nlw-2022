window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
 }
//Deixar destacado no menu superior a parte da seção que a pessoa se encontra (início, serviços, sobre)
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

 // verificar se a seção passou da linha
 // quais dados vou precisar?
 
  const sectionTop = section.offsetTop  // offsetTop indica o início da sessão
  const sectionHeight = section.offsetHeight //sectionHeight incica a altura total da sessão indicando assim o fim da mesma
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline);

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine);

  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if(scrollY > 0) {
  navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if(scrollY > 500) {
  backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}  

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)





/*executar a função é digitar o nome dela mais parênteses na frente*/