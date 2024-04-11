document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Hero section animations
  const profileImage = document.querySelector('.profile-image');
  const heroContent = document.querySelectorAll('.hero .animate__animated');

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        heroContent.forEach((element) => {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        });
      } else {
        heroContent.forEach((element) => {
          element.classList.remove('animate__animated', 'animate__fadeInUp');
        });
      }
    });
  }, { threshold: 0.5 });

  heroObserver.observe(document.querySelector('.hero'));

  // Portfolio and blog animations
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const blogPosts = document.querySelectorAll('.blog-post');

  const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      } else {
        entry.target.classList.remove('animate__animated', 'animate__fadeInUp');
      }
    });
  }, { threshold: 0.5 });

  portfolioItems.forEach((item) => itemObserver.observe(item));
  blogPosts.forEach((post) => itemObserver.observe(post));
});
