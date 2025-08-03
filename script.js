// Smooth scroll for anchor links & hero button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate portfolio items on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-up');
  const trigger = window.innerHeight * 0.92;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.animationPlayState = 'running';
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('resize', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Optional: Animate hero on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-fade-in, .animate-slide-in, .animate-bounce').forEach(el => {
    el.style.animationPlayState = 'running';
  });
});

// Scroll down icon functionality (scrolls to portfolio)
document.getElementById('scroll-down').addEventListener('click', function() {
  const pf = document.getElementById('portfolio');
  if (pf) pf.scrollIntoView({ behavior: 'smooth' });
});

// Contact form dummy handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for subscribing!');
  this.reset();
});

// Mobile nav can be added if needed (not present in this design)