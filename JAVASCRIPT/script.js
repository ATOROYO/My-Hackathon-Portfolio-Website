$(document).ready(function () {
  $(window).scroll(function () {
    // Sticky nav
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
  const typed = new Typed(".typing", {
    strings: [
      "Software Engineer",
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

// Function for read more button
function expandParagraph(params) {
  const expandedParagraph =
    "Apart from the above mention, I'm also a good fine artist and I like drawing things when ever I'm. To add on to that, I do have basic knowledge when it comes to PC repair and maintenance and some litle electronics. And I'm always ready to learn anything new.";
  document.getElementById("toExpand").innerHTML = expandedParagraph;
}
