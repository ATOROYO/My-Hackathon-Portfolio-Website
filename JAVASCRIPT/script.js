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

  // togle menu/nav-bar Script
  $(".menu-btn").click(function () {
    $(".nav-bar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing animation script
  var typed = new Typed(".typing", {
    strings: [
      "Software Developer",
      "Tutor",
      "Mentor",
      "Designer",
      "Blogger",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
