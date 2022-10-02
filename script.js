//Swiper
var swiper = new Swiper(".landing-swiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 15,
      modifier: 4,
      slideShadows: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },

  });

  //Self typing words
  const texts = ['shirts.', 'sweaters.', 'socks.', 'hats.'];
let wordIndex = 0; 
let letterIndex = 0; 
let currentText = '';
let letter = ''; 

(function type() {
    if (wordIndex === texts.length) {
        wordIndex = 0;
    }
    currentText = texts[wordIndex];
    letter = currentText.slice(0, ++letterIndex);
    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        wordIndex++;
        letterIndex = 0;
        setTimeout(type, 3000);
    } else {setTimeout(type, 200);}

}());

//contact form function
let isModalOpen = false;

function toggleModal() {
  if (!isModalOpen) {
     document.body.classList += "modal--open";
     isModalOpen = true;
 } else {
     document.body.classList.remove("modal--open");
     isModalOpen = false;
 } 
}

  //Shop maker
  const shopWrapper = document.querySelector(".shop__item-wrapper")

  function renderShop() {
    products.forEach((product) => {
      shopWrapper.innerHTML += `
            <div class="shop__item">
              <img class = "shop__item-img" src="${product.imgSrc}">
              <div class="item-description">
                <h1 class="shop__item-title">${product.name}</h1>
                <h3 class="shop__item-price">$${product.price}</h3>
                <button class="shop__item-button">Add to Cart</button>
              </div>
            </div>
      `
    })
  }

renderShop();

// Shopping cart function

let shoppingModalOpen = false;

function toggleShoppingModal() {
  if (!shoppingModalOpen) {
     document.body.classList += "shoppingModal--open";
     shoppingModalOpen = true;
 } else {
     document.body.classList.remove("shoppingModal--open");
     shoppingModalOpen = false;
 } 
}

