(function () {
  async function mockSubmit(formData) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { ok: true };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const feedback = form.querySelector('.form-feedback');

    if (!form.checkValidity()) {
      form.classList.add('is-invalid');
      return;
    }

    form.classList.remove('is-invalid');
    const data = Object.fromEntries(new FormData(form));

    form.dataset.loading = 'true';
    mockSubmit(data)
      .then((response) => {
        if (response.ok) {
          feedback.hidden = false;
          feedback.textContent = feedback.dataset.defaultText || feedback.textContent;
          form.reset();
          setTimeout(() => {
            feedback.hidden = true;
          }, 4000);
        }
      })
      .catch(() => {
        feedback.hidden = false;
        feedback.textContent = '发送失败，请稍后重试。';
        setTimeout(() => {
          feedback.hidden = true;
          feedback.textContent = feedback.dataset.defaultText || '';
        }, 4000);
      })
      .finally(() => {
        delete form.dataset.loading;
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (form) {
      const feedback = form.querySelector('.form-feedback');
      if (feedback) {
        feedback.dataset.defaultText = feedback.textContent.trim();
      }
      form.addEventListener('submit', handleSubmit);
    }
  });
})();
