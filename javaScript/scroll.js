const itens = document.querySelectorAll('.top a[href^="#"]')

itens.forEach(item =>{
    item.addEventListener('click', scrollToObj)
})
function scrollToObj(event){
    event.preventDefault()
    const elemento = event.target
    const alvo = elemento.getAttribute('href')
    const eixoY = document.querySelector(alvo).offsetTop
    
    window.scrollTo({
        top: eixoY,
        behavior: "smooth"
    })
}

const botao = document.querySelector('.botaoSubir')
botao.addEventListener('click', scrollToBotao)

function scrollToBotao(){
    const alvo = document.querySelector('#top')
    window.scrollTo({
        top: alvo,
        behavior: "smooth"
    })
}
const botaocss = document.getElementById('btSubir')
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500){
        botaocss.style.display= 'flex'
    }else{
        botaocss.style.display= 'none'
    }
})