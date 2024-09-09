const skills = document.querySelector(".skills");
const allSpanWidths = document.querySelectorAll(".span-width");

const widths = ["80%", "85%", "70%", "80%"];

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop - 100) {
    allSpanWidths.forEach((span, index) => (span.style.width = widths[index]));
  }
});
