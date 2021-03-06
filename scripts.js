const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener('click', function() {
        const postId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${postId}`;
    });
}

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';

});

const maximizeModal = modalOverlay.querySelector('.maximize-modal');
maximizeModal.addEventListener('click', function () {
    if(modalOverlay.querySelector('.modal').classList.contains('fullscreen')) {
        modalOverlay.querySelector('.modal').classList.remove('fullscreen');
    } else {
        modalOverlay.querySelector('.modal').classList.add('fullscreen');
    }
})