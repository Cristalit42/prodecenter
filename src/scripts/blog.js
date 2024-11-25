document.addEventListener('DOMContentLoaded', () => {
  const blogContent = document.querySelector('.blog__content');
  const toggleButton = document.querySelector('.js-btn__show-more');
  let isExpanded = false;

  if (!blogContent || !toggleButton){
    return
  }

  toggleButton.addEventListener('click', () => {
    const items = blogContent.querySelectorAll('.blog__item');

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
