const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

function closeMenu() {
  hamburger.classList.remove('active');
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
}

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('open');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', closeMenu);



   const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let index = 0;
    let timer;

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        dots[idx].classList.remove('active');
      });
      slides[i].classList.add('active');
      dots[i].classList.add('active');
      index = i;
    }

    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    function startCarousel() {
      timer = setInterval(nextSlide, 6000);
    }

    function stopCarousel() {
      clearInterval(timer);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stopCarousel();
        showSlide(i);
        startCarousel();
      });
    });

    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector('.hero-carousel').addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.querySelector('.hero-carousel').addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) {
        stopCarousel();
        nextSlide();
        startCarousel();
      } else if (touchEndX > touchStartX + 50) {
        stopCarousel();
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
        startCarousel();
      }
    });

    showSlide(0);
    startCarousel();


    const revealElements = document.querySelectorAll('.about-text, .about-logo, .feature');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "none";
        entry.target.style.transition = "all 0.8s ease";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    observer.observe(el);
  });



    // Fonction pour détecter si un élément est visible dans le viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight - 100 // seuil de déclenchement
    );
  }

  function revealOnScroll() {
    const elements = document.querySelectorAll('.service-card');
    elements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('revealed');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);


 
  
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".desktop-nav a");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    }, {
      threshold: 0.6
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  });

