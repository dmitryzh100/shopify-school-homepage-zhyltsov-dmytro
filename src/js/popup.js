document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup');
  const closeBtn = document.querySelector('.popup__close');
  const form = document.querySelector('.popup__form');

  const popupActiveClass = 'popup--active';
  const POPUP_KEY = 'popupDismissed';

  if (localStorage.getItem(POPUP_KEY)) {
    popup.style.display = 'none';
    return;
  }

  setTimeout(() => {
    popup.classList.add(popupActiveClass);
  }, 1000);

  const closePopup = () => {
    popup.classList.remove(popupActiveClass);
    localStorage.setItem(POPUP_KEY, 'true');
  };

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closePopup();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    closePopup();
  });
});
