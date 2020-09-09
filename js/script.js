const button = document.querySelector('.button_menu')
const menu = document.querySelector('.header__nav')

button.addEventListener('click', () => {
  menu.classList.toggle('show')
})

button.addEventListener('click', () => {
  button.classList.toggle('burger_menu_active')
})