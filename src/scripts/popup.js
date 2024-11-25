const overlay = document.querySelector('.js-overlay');
const overlayOpen = document.querySelector('.js-overlay__open');
const overlayClose = document.querySelector('.js-overlay__close');

if (!overlay || !overlayOpen || !overlayClose){
  return
}

overlayOpen.addEventListener('click', () => {
  overlay.classList.remove('overlay--hidden')
})

overlayClose.addEventListener('click', () => {
  overlay.classList.add('overlay--hidden')
  

})

overlay.addEventListener('click', (e) =>{
  if(e.target === overlay){
    overlay.classList.add('overlay--hidden')
  }
})