
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
    track.style.transform = `translateX(-${index * width}px)`;
  };

  const initSlider = () => {
    const width = slider.clientWidth;

    // Ensure every slide is 100% width
    slides.forEach((slide) => {
      slide.style.minWidth = width + "px";
    });

    updateSlider();
  };

  const waitForImages = () => {
    const images = slider.querySelectorAll("img");
    let loaded = 0;
    const total = images.length;

    if (total === 0) {
      initSlider();
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === total) {
            initSlider();
          }
        });
      }
    });

    if (loaded === total) {
      initSlider();
    }
  };

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });

  window.addEventListener("resize", initSlider);

  waitForImages();
});

