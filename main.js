
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  
// image slider //
let index = 0;

const updateSlider = () => {
  const width = slider.clientWidth;
  track.style.width = `${slides.length * width}px`;
  track.style.transform = `translateX(-${index * width}px)`;
  slides.forEach((slide) => {
    slide.style.width = `${width}px`;
  });

  // ✅ Show/hide buttons based on position
  prevBtn.style.display = index === 0 ? "none" : "block";
  nextBtn.style.display = index === slides.length - 1 ? "none" : "block";
};

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});
