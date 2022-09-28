
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
