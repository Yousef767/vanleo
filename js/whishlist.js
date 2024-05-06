let itemsFav = document.querySelectorAll(".item i");
itemsFav.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.classList.toggle("addedToFav");
    if (e.parentElement.classList.contains("addedToFav")) {
      e.className = "fa-solid fa-heart";
      e.nextElementSibling.nextElementSibling.style.display = "flex";
      e.nextElementSibling.nextElementSibling.style.opacity = "1";
      e.nextElementSibling.style.display = "none";
    } else {
      e.className = "fa-regular fa-heart";
      e.nextElementSibling.nextElementSibling.style.display = "none";
      e.nextElementSibling.style.display = "flex";
      e.nextElementSibling.style.opacity = "1";
    }
  });
});

itemsFav.forEach((e) => {
  e.addEventListener("mouseover", () => {
    if (e.parentElement.classList.contains("addedToFav")) {
      e.nextElementSibling.style.display = "none";
      e.nextElementSibling.nextElementSibling.style.display = "flex";
      e.nextElementSibling.nextElementSibling.style.opacity = "1";
    } else {
      e.nextElementSibling.nextElementSibling.style.display = "none";
      e.nextElementSibling.style.display = "flex";
      e.nextElementSibling.style.opacity = "1";
    }
  });
  e.addEventListener("mouseleave", () => {
    e.nextElementSibling.nextElementSibling.style.opacity = "0";
    e.nextElementSibling.style.opacity = "0";
  });
  e.addEventListener("touchend", () => {
    e.nextElementSibling.nextElementSibling.style.opacity = "0";
    e.nextElementSibling.style.opacity = "0";
  });
});
