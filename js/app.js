botao=document.querySelector('.botao-menu');
menuChaveado=document.querySelector('.menu-navebar');
menuH=document.querySelector('.botao-menu')


botao.addEventListener('click',function(){
    menuChaveado.classList.toggle('menu-active')
    menuH.classList.toggle('active')
})