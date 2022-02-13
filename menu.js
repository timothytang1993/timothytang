$(document).ready(function () {
  $(".burger-nav").on("click", function () {
    $("header nav .mobile-hidden").toggleClass("open");
  });
});
