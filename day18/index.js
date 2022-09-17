const body = document.body;
const sliders = document.querySelectorAll('.slider');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlider = 0;

rightBtn.addEventListener('click', () => {
  activeSlider++;
  if (activeSlider > sliders.length - 1) {
    activeSlider = 0;
  }
  setBgToBody();
  setActiveSlider();
})
leftBtn.addEventListener('click', () => {
  activeSlider--;
  if (activeSlider < 0) {
    activeSlider = sliders.length - 1;
  }
  setBgToBody();
  setActiveSlider();
})
setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = sliders[activeSlider].style.backgroundImage;
}

function setActiveSlider() {
  sliders.forEach(slider => slider.classList.remove('active'));
  sliders[activeSlider].classList.add('active');
}