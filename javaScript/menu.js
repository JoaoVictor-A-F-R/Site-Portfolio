const botaoMenu = document.querySelector('.iconMenu')
const menu = document.querySelector('.menu')

botaoMenu.addEventListener('click', () => menu.classList.toggle('ativar'))
console.log(menu.childNodes)