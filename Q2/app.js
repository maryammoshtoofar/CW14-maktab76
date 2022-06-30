$(document).ready(function () {
  $("select")
    .change(function () {
      $("p").text($(this).text());
      let text = "";
      $("select option:selected").each(function () {
        text += $(this).text();
      });
      $("#para").html(text);
    })
    .trigger("change");
});
