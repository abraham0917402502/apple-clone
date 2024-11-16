// $(document).ready(function () {
// $(".footer-links-wrapper h3").click(function () {
//   let $this = $(this);
//   let $ul = $this.next("ul");
//   // Toggle the display of the sub-links
//   $ul.slideToggle();
//   // Toggle the "+" to "x" and vice versa
//   $this.toggleClass("expanded");
// });
// Ensure sub-links are hidden by default on mobile devices
// if ($(window).width() <= 768) {
//   $(".footer-links-wrapper ul").hide();
// }
// Optionally, ensure sub-links are hidden on resize to mobile size
// $(window).resize(function () {
//   if ($(window).width() <= 768) {
//     $(".footer-links-wrapper ul").hide();
//   } else {
//     $(".footer-links-wrapper ul").show();
//   }
// });
// });

// ****************************

// // Aschu explanations
// // ******************
$(function () {
  togglerActiveClass();
});
$(document).on("click", ".active h3", function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("expanded");
});
function togglerActiveClass() {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("active");
  } else {
    $(".footer-links-wrapper").removeClass("active");
  }
  $(window).on("resize", function () {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("active");
      $(".footer-links-wrapper ul").hide();
    } else {
      $(".footer-links-wrapper").removeClass("active");
      $(".footer-links-wrapper ul").show();
      $(".footer-links-wrapper h3").removeClass("expanded");
    }
  });
}
