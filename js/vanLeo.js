let vanLeo = document.querySelector(".vanLeo");
window.addEventListener("scroll", () => {
  if (window.scrollY >= vanLeo.offsetTop - 500) {
    vanLeo.classList.add("reachedLogo");
  } else {
    vanLeo.classList.remove("reachedLogo");
  }
});
