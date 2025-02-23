// fade-animation
function fadeIn() {
  $(".fadeUpTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 200;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });

  $(".fadeInTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 200;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeIn");
    } else {
      $(this).removeClass("fadeIn");
    }
  });
}

$(window).scroll(function () {
  fadeIn();
});

$(document).ready(function () {
  fadeIn();
});
