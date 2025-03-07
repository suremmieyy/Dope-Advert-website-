document.addEventListener('DOMContentLoaded', () => {
  // Slider 
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slides img');
  if (slides.length > 0) {
    slides[slideIndex].classList.add('active');
  }

  window.plusSlides = function(n) {
    showSlides(slideIndex + n);
  };

  function showSlides(n) {
    slides[slideIndex].classList.remove('active');
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  // Order form 
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('orderConfirmation').style.display = 'block';
      orderForm.reset();
    });
  }

  // Contact form 
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('contactConfirmation').style.display = 'block';
      contactForm.reset();
    });
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

