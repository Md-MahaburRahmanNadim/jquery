$(function () {
  let inputText = "";
  $("#btn_1").on("click", function () {
    inputText = $("input").val();
    $("#statement h3")
      .text(`Course Entered: ${inputText}`)
      .closest("#statement")
      .css("background", "green");
  });
  $("#courses").on("click", "li", function (e) {
    $(this).after($(`<li> ${inputText}</li>`));
    $(this).next().css("background", "yellow");
    e.stopPropagation();
  });
});
