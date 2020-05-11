let open = document.querySelector('.ham');
let close = document.querySelector('.close');
let nav  = document.querySelector('#nav');

open.addEventListener('click', on);
close.addEventListener('click', off)
function on(){
    nav.style.visibility = 'visible'
    open.style.visibility = 'hidden'
    close.style.visibility = 'visible'
}
function off(){
    nav.style.visibility = 'hidden'
    open.style.visibility = 'visible'
    close.style.visibility = 'hidden'
}