
  function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
  }

  function closeMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('show');
  }


  let currentIndex = 0;
  const track = document.getElementById("carouselTrack");
  const totalImages = 24;

  function updateCarousel() {
    const width = track.clientWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  function nextSlide() {
    if (currentIndex < totalImages - 1) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  window.addEventListener('resize', updateCarousel);