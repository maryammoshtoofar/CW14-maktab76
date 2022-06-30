$(document).ready(function () {
  $(".child").each(function () {
    $(this).html("Hello");
  });

  $(".child").dblclick(function () {
    $(this).html("Goodbye");
  });
});
