$(function(){

    var swiper = new Swiper('.slider', {
        navigation:{ //좌우버튼
            prevEl : '.slider .btn_prev',
            nextEl : '.slider .btn_next'
        },
        pagination:{ //인디케이터
            el:'.slider .paging',
            clickable:true
        },
        loop:false, //슬라이드 반복
        effect: "fade",
        slidesPerView:1,
        slidesPerGroup:1,
        centeredSlides:true,
        allowTouchMove : false,
        autoplay:{
            delay:10000,
            disableOnInteraction:false,
            stopOnLastSlide:true
        },
        navigation:{
            nextEl:'.btn_next',
            prevEl:'.btn_prev'
        },
        on: {
            slideChangeTransitionStart: function () {
                document.querySelectorAll('audio').forEach(function (audio) {
                    audio.pause();
                    audio.classList.remove('audio-active');
                });
            },
            slideChangeTransitionEnd: function () {
                var activeSlide = document.querySelector('.swiper-slide-active');
                var activeAudio = activeSlide.querySelector('audio');       
                if (activeAudio) {
                    var startTime = parseInt(activeAudio.getAttribute('data-start-time')) || 0;
                    activeAudio.currentTime = startTime;
                    activeAudio.play();
                    activeAudio.classList.add('audio-active');
                }
            },
        },
    });

    swiper.autoplay.stop();

    $('.slider > .pause').on('click', function(){
        swiper.autoplay.stop();
        $('.audio-active')[0].pause();
        $(this).hide().next().show();
        stopAnimation();
    });
    $('.slider > .play').on('click', function(){
        swiper.autoplay.start();
        $('.audio-active')[0].play();
        $(this).hide().prev().show();
        startAnimation();
    });
    $('.slider .btn_prev').on('click', function(){
        swiper.autoplay.start();
        $('.pause').show().next().hide();
        startAnimation();
    });
    $('.slider .btn_next').on('click', function(){
        swiper.autoplay.start();
        $('.pause').show().next().hide();
        startAnimation();
    });

    function startAnimation() {
        // Add code to start your animation
        $('.swiper-slide-active *').css('animation-play-state', 'running');
      }
    
      function stopAnimation() {
        // Add code to stop your animation
        $('.swiper-slide-active *').css('animation-play-state', 'paused');
      }
});
