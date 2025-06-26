
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
  };

  const waitForImages = () => {
    const images = slider.querySelectorAll("img");
    let loaded = 0;
    const total = images.length;

    if (total === 0) {
      updateSlider();
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.onload = () => {
          loaded++;
          if (loaded === total) updateSlider();
        };
      }
    });

    if (loaded === total) updateSlider();
  };

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });

  window.addEventListener("resize", updateSlider);

  waitForImages();
});

