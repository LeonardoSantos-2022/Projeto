botao=document.querySelector('.botao-menu');
menuChaveado=document.querySelector('.menu-navebar');


botao.addEventListener('click',function(){
    menuChaveado.classList.toggle('menu-active')
})