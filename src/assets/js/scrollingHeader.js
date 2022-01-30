$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 150) {
      $("#mainNav").addClass("active");
      $("#dropDownHeader").addClass("active");
      $("#dropDownFlecha").addClass("dropdown-active");
    } else {
      $("#mainNav").removeClass("active");
      $("#dropDownHeader").removeClass("active");
      $("#dropDownFlecha").removeClass("dropdown-active");
    }
  });
});
