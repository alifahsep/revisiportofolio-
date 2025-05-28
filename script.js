// NAVIGATION ACTIVATION FUNCTION
function activateNav(el) {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.classList.remove('nav-active'));
  el.classList.add('nav-active');
}

// SERVICE CARD OBSERVER 
const cards = document.querySelectorAll('.service-card');
const container = document.getElementById('card-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('bg-pink-100');
      entry.target.animate(
        [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 600, easing: 'ease-out', fill: 'forwards' }
      );
    } else {
      entry.target.classList.remove('bg-pink-100');
    }
  });
}, { threshold: 0.7 });

cards.forEach(card => observer.observe(card));
function scrollNextCard() {
  const cardHeight = cards[0].offsetHeight + 24;
  container.scrollBy({ top: cardHeight, behavior: 'smooth' });
}

// TESTIMONIAL SWITCH FUNCTION (animated)
let currentTestimonial = 0;

  function showTestimonial(index) {
    const slider = document.getElementById('testimonialSlider');
    const total = 2;
    slider.style.transform = `translateX(-${index * 100}%)`;
    for (let i = 0; i < total; i++) {
      const dot = document.getElementById('dot' + i);
      dot.classList.remove('bg-pink-600');
      dot.classList.add('bg-pink-300');
    }
    document.getElementById('dot' + index).classList.add('bg-pink-600');
    document.getElementById('dot' + index).classList.remove('bg-pink-300');
    currentTestimonial = index;
  }
  showTestimonial(0);

