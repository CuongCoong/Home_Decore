$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $("nav").toggleClass("nav-toggle");
  });

  $(window).scroll(function () {
    var pos_body = $("html,body").scrollTop(); // check how much page scroll position
    // console.log(pos_body)
    if (pos_body > 40) {
      $(".backTop").addClass("show");
    } else {
      $(".backTop").removeClass("show");
    }
  });
  $(".backTop").click(function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      10
    );
  });
  // end page
});
