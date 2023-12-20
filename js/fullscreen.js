document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      // Add your Swiper options here
    });
  
    var btnNext = document.querySelector('.swiper-slide:nth-child(1) .btn_next');
  
    btnNext.addEventListener('click', function () {
      if (document.fullscreenEnabled) {
        document.body.requestFullscreen();
      } else {
        console.log('Fullscreen is not supported.');
      }
    });
  });