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

// Modal
var modal = document.getElementById('contentModal');
// Modal Button
var modalBtn = document.getElementById('modalBtn');
// Modal Close Buttons
var closeBtn = document.getElementsByClassName('modal-exit')[0];
var exitBtn = document.getElementById('exitBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
exitBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';    
    }
}



