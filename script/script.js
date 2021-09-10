var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

$(function (){
  $('.scrollTop').click(function (){
    $(window).scrollTop(0);
  });

  $(window).scroll(function (){
    let wScroll = $(this).scrollTop();
    if(wScroll > 0){
      $('header').addClass('active');
      $('.scrollTop').addClass('active');
    } else {
      $('header').removeClass('active');
      $('.scrollTop').removeClass('active');
    }
    console.log(wScroll);
  });
});