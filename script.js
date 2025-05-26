// Menu toggle mobile
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  menuToggle.classList.toggle('active');
  navList.classList.toggle('open');
});

// Hero carousel images (simples troca automática)
const heroImages = [
  { src: 'images/instalacao1.jpeg', alt: 'Ar-condicionado instalado' },
  { src: 'images/manutencao1.jpeg', alt: 'Manutenção de ar-condicionado' },
  { src: 'images/familia.jpeg', alt: 'Conserto de ar-condicionado' },
];

const heroImageElement = document.getElementById('heroImage');
let currentImageIndex = 0;

function changeHeroImage() {
  heroImageElement.classList.add('fade-out');
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroImageElement.src = heroImages[currentImageIndex].src;
    heroImageElement.alt = heroImages[currentImageIndex].alt;
    heroImageElement.classList.remove('fade-out');
  }, 600);
}

setInterval(changeHeroImage, 7000);
