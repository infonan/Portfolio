
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  
// image slider //
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.slider').forEach((slider) => {
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slide');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');
    let index = 0;

    const update = () => {
      const width = slider.clientWidth;
      track.style.transform = `translateX(-${index * width}px)`;
      slides.forEach(slide => slide.style.width = `${width}px`);

      prev.style.display = index === 0 ? 'none' : 'block';
      next.style.display = index === slides.length - 1 ? 'none' : 'block';
    };

    const waitForImages = () => {
      const imgs = slider.querySelectorAll('img');
      let loaded = 0;
      imgs.forEach(img => {
        if (img.complete) loaded++;
        else img.onload = () => {
          loaded++;
          if (loaded === imgs.length) update();
        };
      });
      if (loaded === imgs.length) update();
    };

    next.addEventListener('click', () => {
      if (index < slides.length - 1) {
        index++;
        update();
      }
    });

    prev.addEventListener('click', () => {
      if (index > 0) {
        index--;
        update();
      }
    });

    window.addEventListener('resize', update);
    waitForImages();
  });
});
