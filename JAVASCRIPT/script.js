$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nav-bar").addClass("sticky");
    } else {
      $(".nav-bar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
});
