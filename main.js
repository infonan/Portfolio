
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

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      updateSlider();
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
    });

    window.addEventListener('resize', updateSlider);
    updateSlider();
  });
