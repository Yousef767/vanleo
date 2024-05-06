let images = document.querySelectorAll(".sww .swiper-slide img");
let mainImage = document.getElementById("main-img");
let video = document.getElementById("video");
let source = document.getElementById("source");

images.forEach((e,i) => {
  e.addEventListener("click", () => {
    if(e.dataset.source){
      mainImage.style.display='none';
      video.style.display='block';
      source.src = e.dataset.source;
    }else{
      video.style.display='none';
      mainImage.style.display='block';
      mainImage.src = e.src;
    }
  });
});
