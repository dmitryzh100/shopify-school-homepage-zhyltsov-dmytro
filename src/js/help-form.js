document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.help-form__form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Thank you!');

    form.reset();
  });
});
