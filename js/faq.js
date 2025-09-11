
document.addEventListener('DOMContentLoaded', function() {
  const accordionButtons = document.querySelectorAll('.accordion');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
        panel.style.maxHeight = null; 
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px'; 
      }
      
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = panel.style.maxHeight ? 'rotate(180deg)' : 'rotate(0deg)';
        icon.style.transition = 'transform 0.3s ease-in-out';
      }
    });
  });
});