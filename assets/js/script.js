$(document).ready(function () {
      $(window).load(function () {
      $(".loding-page").fadeOut();
  });
      
  $("body").click(function(){
    $(".audioDemo").trigger('play');
});
  $(".slider-main").slick({
      slidesToShow: 6,
      slidesToScroll: 2,
      outhight: true,
      autoplaySpeed: 2000,
      autoplay: true,
      dots: false,
      arrows: false,
      responsive: [
          {
              breakpoint: 997,
              settings: {
                  slidesToShow: 4,
                  infinite: true,
                  dots: false,
              },
          },
          {
              breakpoint: 772,
              settings: {
                  slidesToShow: 2,
              },
          },
      ],

  });


  $(".comment-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      outhight: true,
      autoplaySpeed: 2000,
      autoplay: true,
      dots: true,
      arrows: false,
  });

  $(".communicatebetter-section").hover(function () {
      $(".img-teaminbox-box ").addClass("hover2");
      console.log("shkjdsah");
  });

  if ($(window).width() < 772) {
      $(".burger-b").click(function () {
          $(this).toggleClass("close-b");
          $(".nav-bar-ul ").slideToggle("slow");
      });

      $(".li-has-chiled ").click(function () {
          $(".sub-menu ").slideToggle("slow");
          console.log("shkjdsah");
      });
  } else {
  }



  AOS.init();
});
