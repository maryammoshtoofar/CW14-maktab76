$(document).ready(function () {
  $("body").append("<p></p>");
  $(".form-select").change(function () {
    $("p").html($(this).val());
  });
});
