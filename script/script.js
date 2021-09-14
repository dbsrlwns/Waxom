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
    // 스크롤탑
    $(".scrollTop").click(function (){
      $("html, body").animate({scrollTop:0}, 500);
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


    // section 애니메이션 
    let servies = $(".servies").offset().top - 500;
    let realization = $(".realization").offset().top - 500;
    let text_boxes = $(".text_boxes").offset().top - 800;
    let latest_projects = $(".latest_projects").offset().top - 800;
    let excellent_mobile = $(".excellent_mobile").offset().top - 800;
    let counters = $(".counters").offset().top - 500;
    let recent_posts = $(".recent_posts").offset().top - 700;
    
    if(wScroll > servies){
      $(".servies").css({"opacity":"1"});
      $(".servies").css({"transform":"translateY(0)"});
    }
    if(wScroll > realization) {
      $(".realization").css({"opacity":"1"});
      $(".realization").css({"transform":"translateY(0)"});
    }
    if(wScroll > text_boxes) {
      $(".text_boxes").css({"width":"100%"});
      $(".text_boxes").children(".container").css({"opacity":"1"});
    }
    if(wScroll > latest_projects) {
      $(".latest_projects").css({"opacity":"1"});
      $(".latest_projects").css({"transform":"translateY(0)"});
    }
    if(wScroll > excellent_mobile) {
      $(".excellent_mobile").css({"opacity":"1"});
      $(".excellent_mobile").css({"transform":"translateY(0)"});
    }
    if(wScroll > counters) {
      $(".counters").css({"opacity":"1"});
      $(".counters").css({"transform":"translateY(0)"});
    }
    if(wScroll > recent_posts) {
      $(".recent_posts").css({"opacity":"1"});
      $(".recent_posts").css({"transform":"translateY(0)"});
    }



  });

  // 윈도우 리사이즈
  $(window).resize(function (){
    let width = $(this).width();
    console.log(width);
    if(width > 768){
      $('.main-menu').css({"display":"flex"});
    } else {
      $('.main-menu').css({"display":"block"});
      $('.main-menu').hide();
    }
  });

  // 햄버거 메뉴
  $('.ham-menu').click(function (e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.main-menu').stop().slideToggle(500);
  });
});