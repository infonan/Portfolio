
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
const closeBtn = document.getElementById('close-sidebar');
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});


  
// image slider //
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.slider').forEach(function(slider) {
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.slider-button.prev');
    const nextBtn = slider.querySelector('.slider-button.next');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let intervalId;

    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function goToNext() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }

    function goToPrev() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    // Adds button functionality only if buttons exist
    if (nextBtn) nextBtn.addEventListener('click', goToNext);
    if (prevBtn) prevBtn.addEventListener('click', goToPrev);

    // Autoplay for all sliders
    function startAutoplay() {
      intervalId = setInterval(goToNext, 4500); // 4.5 sec per slide
    }

    function stopAutoplay() {
      clearInterval(intervalId);
    }

    // Start autoplay
    startAutoplay();

    // Optional: pause on hover if you want
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Initialize
    updateSlider();
  });
});
