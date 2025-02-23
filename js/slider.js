// top-slick
jQuery(function ($) {
  $(".js-top-slick").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    fade: true,
    centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
  });
});

// works-slick
$(".js-works-slick").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  centerPadding: "10%",
  variableWidth: true,
  dots: true,
  responsive: [
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1, 
        slidesToScroll: 1, 
      }
    }
  ]
});
