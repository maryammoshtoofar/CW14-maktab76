$(document).ready(function () {
  $("#fadeBtn").click(function () {
    $("#cardContainer div:first-child").fadeToggle(5000);
    $("#cardContainer div:nth-child(2)").fadeToggle(3000);
    $("#cardContainer div:nth-child(3)").fadeToggle(1000);
  });
});
