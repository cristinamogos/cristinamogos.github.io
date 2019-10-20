//activate tooltip
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

//close menu
$(".navigation__link").on("click", function(e) {
  $(".navigation__checkbox").prop("checked", false);
});

$(".contact__list__item-email").click(function() {
  let val = $(".contact__list__item-email").text();
  if (val === "Email") {
    $(".contact__list__item-email")
      .text("cristina.mogos23@gmail.com")
      .css("color", "blue");
  } else {
    $(".contact__list__item-email")
      .text("Email")
      .css("color", "#007bff");
  }
});
