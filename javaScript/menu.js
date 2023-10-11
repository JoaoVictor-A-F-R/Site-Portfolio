const botaoMenu = document.getElementById('botao')
const menu = document.getElementById('menu')
const menuRetratil = document.getElementById('menuRetratil')
let aberto = 0

botaoMenu.addEventListener('click', () => {
    if(aberto == 0){
        aberto = 1
        menu.style.animationName = 'menuRetratil'
        menuRetratil.style.display = 'flex'
    }else{
        menu.style.animationName = 'menuRetratil2'
        menuRetratil.style.display = 'none'
        aberto = 0
    }
})