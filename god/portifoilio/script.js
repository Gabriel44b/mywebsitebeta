// Seleciona os elementos
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const triggers = document.querySelectorAll('.popup-trigger');
const carouselImages = document.getElementById('carousel-images');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Variável para rastrear a imagem atual
let currentIndex = 0;

// Mostra o popup com o carrossel começando na imagem clicada
triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        popup.style.display = 'flex';
    });
});

// Fecha o popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Atualiza o carrossel para mostrar a imagem atual
function updateCarousel() {
    const imageWidth = carouselImages.children[0].offsetWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Navegação no carrossel
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : triggers.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < triggers.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Fecha o popup ao clicar fora dele
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
