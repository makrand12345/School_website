document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  if (!header) {
    console.error("Header not found");
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("header--sticky");
    } else {
      header.classList.remove("header--sticky");
    }
  });
});


// slider functionality 


document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".exhibition-section__images");
  const prevBtn = document.getElementById("previous-button");
  const nextBtn = document.getElementById("next-button");

  if (!slider || !prevBtn || !nextBtn) return;

  // Amount to scroll = width of one slide + gap
  const scrollAmount = () => {
    const firstSlide = slider.querySelector(".exhibition-section__image");
    if (!firstSlide) return 300;
    const gap = 32; // 2rem gap
    return firstSlide.offsetWidth + gap;
  };

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollAmount(),
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  });
});
