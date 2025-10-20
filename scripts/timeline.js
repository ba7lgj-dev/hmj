(function () {
  function initObserver() {
    const container = document.querySelector('[data-observe]');
    if (!container || typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('[data-observe-item]').forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    container.querySelectorAll('[data-observe-item]').forEach((item) => observer.observe(item));
  }

  document.addEventListener('DOMContentLoaded', initObserver);
})();
