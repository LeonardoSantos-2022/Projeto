botao=document.querySelector('.botao-menu');
menuChaveado=document.querySelector('.botao-menu');
menuH=document.querySelector('.menu-horizontal')

botao.addEventListener('click',function(){
    menuChaveado.classList.toggle('active')
    menuH.classList.toggle('menu-active')
})