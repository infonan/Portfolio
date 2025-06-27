
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  
// image slider //
document.querySelectorAll('.slider').forEach(function(slider) {
  const track = slider.querySelector('.slider-track');
  const slides = Array.from(track.children);
  const prevBtn = slider.querySelector('.slider-button.prev');
  const nextBtn = slider.querySelector('.slider-button.next');
  let currentIndex = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  // Optional: Swipe support for mobile
  let startX = 0;
  track.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });
  track.addEventListener('touchend', function(e) {
    let endX = e.changedTouches[0].clientX;
    if (endX < startX - 40) nextBtn.click();
    if (endX > startX + 40) prevBtn.click();
  });

  // Initialize position
  updateSlider();
});
