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
