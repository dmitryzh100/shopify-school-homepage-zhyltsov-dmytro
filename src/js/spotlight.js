const spotlight = document.querySelector('.product-spotlight');

const mainImage = spotlight.querySelector('.product-spotlight__image');
const swatchesContainer = spotlight.querySelector(
  '.product-spotlight__swatches'
);
const swatches = swatchesContainer.querySelectorAll(
  '.product-spotlight__swatch'
);
const variations = spotlight.querySelectorAll(
  '.product-spotlight__color'
);
const sizeButtons = spotlight.querySelectorAll(
  '.product-spotlight__opt-button'
);
const priceEl = spotlight.querySelector("[itemprop='price']");

let currentVariation = 1;

const setActive = (elements, activeEl) => {
  elements.forEach((el) => {
    const baseClass = Array.from(el.classList).find((cls) =>
      cls.includes('product-spotlight__')
    );
    if (!baseClass) return;

    const activeClass = `${baseClass}--active`;
    el.classList.remove(activeClass);

    if (el === activeEl) {
      el.classList.add(activeClass);
    }
  });
};

const updateMainImage = (variation, view) => {
  const newSrc = `/collection_${variation}_${view}.png`;
  mainImage.src = newSrc;
  mainImage.setAttribute('data-variation', variation);
  mainImage.setAttribute('data-view', view);
};

const updateSwatches = (variation) => {
  swatches.forEach((swatch, i) => {
    const img = swatch.querySelector('img');
    img.src = `/collection_${variation}_${i + 1}.png`;
    img.alt = `View ${i + 1}`;
  });
};

const updatePrice = (newPrice) => {
  priceEl.textContent = newPrice.toFixed(2);
  priceEl.setAttribute('content', newPrice.toFixed(2));
};

swatches.forEach((swatch, i) => {
  swatch.addEventListener('click', (e) => {
    e.preventDefault();
    setActive(swatches, swatch);
    updateMainImage(currentVariation, i + 1);
  });
});

variations.forEach((variation, vIndex) => {
  variation.addEventListener('click', (e) => {
    e.preventDefault();
    setActive(variations, variation);
    currentVariation = vIndex + 1;
    updateSwatches(currentVariation);
    updateMainImage(currentVariation, 1);
    setActive(swatches, swatches[0]);

    // Change price just for visual effect
    updatePrice(300 + vIndex * 20);
  });
});

sizeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    setActive(sizeButtons, button);
  });
});

if (swatches.length > 0) setActive(swatches, swatches[0]);
if (variations.length > 0) setActive(variations, variations[0]);
if (sizeButtons.length > 0) setActive(sizeButtons, sizeButtons[0]);
