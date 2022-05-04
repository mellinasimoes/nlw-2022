function onScroll() {
 if(scrollY > 0) {
  navigation.classList.add('scroll')
 } else {
   navigation.classList.remove('scroll')
 }
}


function openMenu() {
  document.body.classList.add('menu-expanded')
}


function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


/*executar a função é digitar o nome dela mais parênteses na frente*/