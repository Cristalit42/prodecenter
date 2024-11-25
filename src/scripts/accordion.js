document.addEventListener('DOMContentLoaded', () => {
  const acc = document.querySelectorAll('.accordion-header');
  
  if (!acc.length) {
    return;
  }
  
  acc.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const content = accordionItem.querySelector('.accordion-content');
      const icon = header.querySelector('.accordion__icon');
      
      document.querySelectorAll('.accordion-content').forEach(item => {
        if (item !== content) {
          item.classList.remove('active');
          const otherIcon = item.parentElement.querySelector('.accordion__icon');
          otherIcon?.classList.remove('active'); 
        }
      });
      
      content.classList.toggle('active');
      icon.classList.toggle('active'); 
    });
  });
});
