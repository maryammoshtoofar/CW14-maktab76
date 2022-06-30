function sumOfChecked() {
  let isChecked = $("input:checked").length;
  $("#total").html(isChecked);
}

sumOfChecked();

$("input[type=checkbox]").click(function () {
  sumOfChecked();
});
