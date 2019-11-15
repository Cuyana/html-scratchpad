import Glide from "@glidejs/glide";

const glide = new Glide(".glide").mount();

glide.on("move.after", function() {
  const carouselPosition = document.querySelector("#carousel-position");
  const items = document.querySelectorAll(".carousel-item").length;
  carouselPosition.innerHTML = `${glide.index + 1}/${items}`;
});

const prevButton = document.querySelector("#carousel-prev");
prevButton.addEventListener("click", () => {
  glide.go("<");
});

const nextButton = document.querySelector("#carousel-next");
nextButton.addEventListener("click", () => {
  glide.go(">");
});
