document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");

  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText.replace(/\D/g, ""); // Strip non-numeric characters.

      const increment = target / 200;

      if (current < target) {
        counter.innerText =
          Math.ceil(current + increment) + (target === 99 ? "%" : "+");
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target + (target === 99 ? "%" : "+");
      }
    };

    updateCounter();
  });
});



var swiper = new Swiper(".brandsSwiper", {
  slidesPerView: 7,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".instafeed", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});


AOS.init();

// if (window.innerWidth <= 767) {
//   const link = document.querySelector('link[href="assets/css/aos.css"]');
//   if (link) {
//     link.remove();
//   }
// }