
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  
// image slider //
document.querySelectorAll('.slider').forEach((slider) => {
  const track = slider.querySelector('.slider-track');
  const slides = slider.querySelectorAll('.slide');
  const nextBtn = slider.querySelector('.next');
  const prevBtn = slider.querySelector('.prev');
  let index = 0;

  const updateSlider = () => {
    const width = slider.clientWidth;
    track.style.width = `${slides.length * width}px`;
    track.style.transform = `translateX(-${index * width}px)`;
    slides.forEach((slide) => {
      slide.style.width = `${width}px`;
    });

    // ✅ Show/hide buttons based on current position
    prevBtn.style.display = index === 0 ? "none" : "block";
    nextBtn.style.display = index === slides.length - 1 ? "none" : "block";
  };

  const waitForImages = () => {
    const images = slider.querySelectorAll("img");
    let loaded = 0;
    if (images.length === 0) {
      updateSlider();
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.onload = () => {
          loaded++;
          if (loaded === images.length) updateSlider();
        };
      }
    });

    if (loaded === images.length) updateSlider();
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

  window.addEventListener("resize", updateSlider);

  waitForImages();
});
