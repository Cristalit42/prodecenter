document.addEventListener('DOMContentLoaded', () => {
  const saleContent = document.querySelector('.sale__content');
  const toggleButton = document.querySelector('.js-btn__show-more');
  let isExpanded = false;

  if (!saleContent || !toggleButton){
    return
  }

  toggleButton.addEventListener('click', () => {
    const items = saleContent.querySelectorAll('.sale__content-item');

    isExpanded = !isExpanded;

    items.forEach((item, index) => {
      if (index >= 8) {
        if (isExpanded) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      }
    });

    toggleButton.innerHTML = isExpanded
      ? '<span>скрыть</span>'
      : '<span>показать еще</span>';
  });
});
