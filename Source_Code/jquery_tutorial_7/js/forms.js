$("form").on("submit", function () {
  const enteredWord = $("input#entered_word").val(); // when user submit the button we catch the value of the input field and store it enteredWord variable
  alert(enteredWord);
});

$("button#loc_button").on("dblclick click", function () {
  const enteredZip = $("input#entered_zip").val();
  $("input#entered_city_state").val(enteredZip + " is for NJ");
});
$("#entered_zip").on("focus", () => {
  $("#city_display").text("enter the type");
});
