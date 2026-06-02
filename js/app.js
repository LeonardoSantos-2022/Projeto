botao=document.querySelector('.botao-menu');
menuChaveado=document.querySelector('.botao-menu');
navbar=document.querySelector('.cabecario');
footer=document.querySelector('.rodapé');

const menuH=document.querySelector('.menu-mobile');
const btnRetornUp=document.getElementById('btnRetornUp');
const btnRetornUpStyle=document.querySelector('.btnRetorn > i');

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

const posFooter=footer.getBoundingClientRect().height

window.addEventListener('scroll',function(e){
    
    const movePagina=this.window.scrollY
    const docHeight=window.document.body.offsetHeight
    const posBtnFixed=btnRetornUp.getBoundingClientRect().height
    const posBtnFixedTop=btnRetornUpStyle.getBoundingClientRect().top
    const calcHeight=parseInt((docHeight-posFooter)-posBtnFixed-posBtnFixedTop)
    
    if (movePagina>=calcHeight) {
        btnRetornUpStyle.style.backgroundColor='white';
        btnRetornUpStyle.style.color='black';
    }else{
        btnRetornUpStyle.style.backgroundColor='black';
        btnRetornUpStyle.style.color='white';
    }

if (this.scrollY > 2) {
    navbar.style.top='-130px';
   navbar.style.transition='top .1s ease-out';
    btnRetornUp.style.display='flex'
}else{
   navbar.style.top='0' ;
   navbar.style.transition='top .1s ease-out';
   btnRetornUp.style.display='none'
}
})

btnRetornUp.addEventListener('click',function(){
    window.scroll(top,0)
})







