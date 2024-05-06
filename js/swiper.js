var swiper = new Swiper(".sw", {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
var swiper = new Swiper(".swsw", {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
});

var swiper = new Swiper(".sw2", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    370: {
      slidesPerView: 1,
    },
    420: {
      slidesPerView: 1.2,
    },
    600: {
      slidesPerView: 1.7,
    },
    850: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2.5,
    },
    1400: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".sww", {
  slidesPerView: 5,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 3,
    },
    340: {
      slidesPerView: 4,
    },
    500: {
      slidesPerView: 5,
    },
  },
});
