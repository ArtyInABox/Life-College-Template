const btnHamburger = document.querySelector('#btnHamburger');
const menu = document.querySelector('.menu');

btnHamburger.addEventListener('click', function(){
    
    if(menu.classList.contains('open')) {
        menu.classList.remove('open');
        btnHamburger.classList.remove('open');
    } else {
        menu.classList.add('open');    
        btnHamburger.classList.add('open');    
    }
});
