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
      depth: 10,
      modifier: 4,
      slideShadows: false,
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
            <a href="#"><img class = "shop__item-img" src="${product.imgSrc}" href="#" onclick="showProduct(${product.id})"></a>
              <div class="item-description">
                <h1 class="shop__item-title">${product.name}</h1>
                <h3 class="shop__item-price">$${product.price}</h3>
                <button onclick="addToCart(${product.id})" class="shop__item-button">Add to Cart</button>
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

//Add to cart function
var total = 0
function addToCart(itemId) {
  const cartList = document.querySelector(".cart__list");
  cartList.innerHTML += `
  <li class="cart__item">
      <img src="${products[itemId].imgSrc}" class="cart__img">
      
      <div class="cart__item-description">
        <h3 class="cart__item-title">${products[itemId].name}</h3>
        <h3 class="cart__price">$${products[itemId].price}</h3>
      </div>

      <button class="delete-cart-item" onclick="removeFromCart(${products[itemId].price})">Delete</button>
  </li>
  `;
  
  total += products[itemId].price;

  const cartTotal = document.querySelector(".cart__total");

  cartTotal.innerHTML = `$${total}`;
}

function removeFromCart(price) {
  deleteButton = document.querySelector(".delete-cart-item");
  deleteButton.parentElement.remove();
  total -= price;
  let cartTotal = document.querySelector(".cart__total");
  cartTotal.innerHTML = `$${total}`
}


let productModalOpen = false;

function toggleProductModal() {
  if (!productModalOpen) {
     document.body.classList += "productModal--open";
     productModalOpen = true;
 } else {
     document.body.classList.remove("productModal--open");
     productModalOpen = false;
 } 
}

function showProduct(itemId) {
  toggleProductModal()
  productModal = document.querySelector(".insertProduct")
  productModal.innerHTML = `
    
      <div class="swiper productSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide productSwiperSlide">
          <img class="productModalImg" src="${products[itemId].imgSrc}">
        </div>
        <div class="swiper-slide productSwiperSlide">
          <img class="productModalImg" src="${products[itemId].imgSrc}"/>
        </div>
        <div class="swiper-slide productSwiperSlide">
          <img class="productModalImg" src="${products[itemId].imgSrc}"/>
        </div>
        <div class="swiper-slide productSwiperSlide">
          <img class="productModalImg" src="${products[itemId].imgSrc}"/>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

        <div class="productModalDescription">
        <h2 class="productModalTitle">
        ${products[itemId].name}
        </h2>
        <h4 class="productModalPrice">
        $${products[itemId].price}
        </h4>
        <p class="productModalText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A blanditiis nesciunt, maxime consequuntur
          delectus quia sapiente reprehenderit quam repudiandae culpa deleniti nulla repellat, totam, ea voluptas
          nisi illum quisquam? Magni eius dolore voluptatum neque.
        </p>
        </div>

  `
  var long = new Swiper(".productSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    });

}
