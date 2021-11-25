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

// Modal1
var modal1 = document.getElementById('contentModal1');
// Modal1 Button
var modalBtn1 = document.getElementById('modalBtn1');
// Modal1 Close Buttons
var closeBtn1 = document.getElementsByClassName('modal1-exit')[0];
var exitBtn1 = document.getElementById('exitBtn1');

modalBtn1.addEventListener('click', openModal);
closeBtn1.addEventListener('click', closeModal);
exitBtn1.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal() {
    modal1.style.display = 'block';
}

function closeModal() {
    modal1.style.display = 'none';
}

function clickOutside(e) {
    if (e.target == modal) {
        modal1.style.display = 'none';    
    }
}



