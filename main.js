const close = document.querySelector('.close')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
hamburger.addEventListener('click',(e)=>{
    menu.classList.toggle('active')
})
close.addEventListener('click',()=>{
    menu.classList.toggle('active')
})