// accordion
$(function () {
  $(".faq-q").first().addClass("is-open").next(".faq-a").show();

  $(".faq-q").click(function () {
    $(".faq-q").not(this).removeClass("is-open").next(".faq-a").slideUp();

    $(this).toggleClass("is-open").next(".faq-a").slideToggle();
  });
});
