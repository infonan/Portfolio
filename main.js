
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  
// image slider //
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.slider').forEach(function(slider) {
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.slider-button.prev');
    const nextBtn = slider.querySelector('.slider-button.next');
    const totalSlides = slides.length;
    let currentIndex = 0;
    
    // Initialize slider position
    updateSlider();
    
    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    });
    
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    });
    
    // Optional: Auto-play (remove if not needed)
    const autoplay = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 5000);
    
    // Pause autoplay on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoplay));
  });
});
