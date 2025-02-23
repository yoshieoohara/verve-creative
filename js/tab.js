// tab
function GethashID(hashIDName) {
  if (hashIDName) {
    $(".tab li")
      .find("a")
      .each(function () {
        var idName = $(this).attr("href");
        if (idName == hashIDName) {
          var parentElm = $(this).parent();
          $(".tab li").removeClass("is-active");
          $(parentElm).addClass("is-active");
          $(".area").removeClass("is-show");
          $(hashIDName).addClass("is-show");
        }
      });
  }
}

$(".tab a").on("click", function () {
  var idName = $(this).attr("href");
  GethashID(idName);
  return false;
});

$(window).on("load", function () {
  $(".tab li:first-of-type").addClass("is-active");
  $(".area:first-of-type").addClass("is-show");
  var hashName = location.hash;
});
