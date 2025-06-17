
  document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.stat-number');
    let triggered = false;

    function animateCounters() {
      if (triggered) return;
      counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const step = target / 100;

        const updateCount = () => {
          count += step;
          if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
      triggered = true;
    }

    // Activer le compteur quand la section est visible à l'écran
    const statsSection = document.querySelector('.stats-section');
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (statsSection) observer.observe(statsSection);
  });





  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.innerHTML = `
        <h3 style="color:#00C9FF">✅ Merci ! Votre message a été envoyé.</h3>
        <p>Nous vous contacterons très bientôt.</p>
      `;
    } else {
      form.innerHTML = `
        <h3 style="color:red">❌ Une erreur est survenue.</h3>
        <p>Veuillez réessayer plus tard.</p>
      `;
    }
  });



 







