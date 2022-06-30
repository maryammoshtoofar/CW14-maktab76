$(document).ready(function () {
  setBg();
  console.log($("tbody tr"));
  $("tbody tr").hover(
    function () {
      $(this).css("background-color", "red");
    },
    function () {
      setBg();
    }
  );
});

function setBg() {
  $("tbody tr:odd").css("background-color", "blue");
  $("tbody tr:even").css("background-color", "green");
}
