const container = document.querySelector('.section__11-container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})