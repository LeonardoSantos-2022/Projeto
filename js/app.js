botao=document.querySelector('.botao-menu');
menuChaveado=document.querySelector('.botao-menu');
const menuH=document.querySelector('.menu-mobile')

botao.addEventListener('click',function(){
    menuChaveado.classList.toggle('active')
    menuH.classList.toggle('menu-active') 
    if (!menuH.classList.contains("menu-active")) {
        document.querySelector('body').style.overflow="hidden"
    }else{ 
        document.querySelector('body').style.overflow="visible"
    }
})
navbar=document.querySelector('.cabecario')
window.addEventListener('scroll',function(){
if (this.scrollY > 0 && this.innerWidth>992) {
    navbar.style.top='-130px';
    navbar.style.transition='all .5s ease-in';
}else{
   navbar.style.top='0' ;
   navbar.style.transition='all .3s ease-in';
}
})
