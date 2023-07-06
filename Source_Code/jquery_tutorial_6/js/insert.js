$("#btn_main").on("click", () => {
  $(".dope").text("This is new replacement text"); // if we give the argument the it will change the content of the selector element
  // alert($(".dope").text()); // but if we dont give the argument the we capture the content of that selected element
  $("#btn_main").val("double click me"); // this will change the content of the btn element value property
  $("#btn_main").on("dblclick", () => {
    $(".dope").text(`You'll learn how to replace me`);
    $("#btn_main").val("Replace");
  });
});

// $("#btn_main").on("dblclick", () => {
//   $(".dope").text("You'll learn how to replace me");
// });

$("#btn_change_html").on("click", () => {
  $(".dope").html(
    `<b class='cool'>This is an element where cool class is applied</b>`
  );
  alert($(".dope").html()); // this will give the text inside of the element
});
