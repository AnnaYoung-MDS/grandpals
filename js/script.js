const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
});

function openStory(name) {
  alert(`Opening story: ${name}`);
}

updateSlider();