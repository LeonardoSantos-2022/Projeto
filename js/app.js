botao=document.querySelector('.botao-menu');
menuChaveado=document.querySelector('.botao-menu');
navbar=document.querySelector('.cabecario')
const menuH=document.querySelector('.menu-mobile');


botao.addEventListener('click',function(){
    menuChaveado.classList.toggle('active')
    menuH.classList.toggle('menu-active') 
    if (!menuH.classList.contains("menu-active")) {
        document.querySelector('body').style.overflow="hidden";
        navbar.style.borderBottom='none';
    }else{ 
        document.querySelector('body').style.overflow="visible";
          navbar.style.borderBottom='5px solid rgb(54, 54, 54)';
    }
})
window.addEventListener('scroll',function(){
if (this.scrollY > 2 && this.innerWidth > 992) {
    navbar.style.top='-130px';
   navbar.style.transition='top .1s ease-out';
}else{
   navbar.style.top='0' ;
   navbar.style.transition='top .1s ease-out';
}
})
