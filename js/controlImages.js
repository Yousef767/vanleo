let images = document.querySelectorAll(".sww .swiper-slide img");
let mainImage = document.getElementById("main-img");
//let swSlider = document.querySelectorAll('.swsw .swiper-slide');
images.forEach((e,i) => {
  e.addEventListener("click", () => {
    mainImage.src = e.src;
  });
});
