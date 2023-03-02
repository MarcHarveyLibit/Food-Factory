const btnShow = document.querySelector('.btn__show');
const btnBack = document.querySelector('.btn__back');
const body = document.querySelector('body');

if(btnShow) {
    btnShow.addEventListener('click', () => {
        body.classList.add('show');
    })
}

if(btnBack) {
    btnBack.addEventListener('click', () => {
        body.classList.remove('show');
    })
}