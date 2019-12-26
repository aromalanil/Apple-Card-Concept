let menu =document.getElementById("menu-button");
let nav = document.querySelector('.working-nav');

menu.addEventListener('click',()=>
{
    nav.classList.toggle('mobile-visible')
})