// $("p.instruct_title, div#closing_statement, h3").css("color", "green");
$("p.instruct_title")
  .add("div#closing_statement")
  .add("h3")
  .css("color", "green");

$("li.important").on("mouseover", function () {
  $(this).attr("id", "big");
  $(this).on("mouseleave", function () {
    $(this).attr("id", "small");
  });
});

$("h1#title").on("click", function () {
  $(this).attr("class", "pretty border");
});

$("img#the_img").on("click", function () {
  // different ways of appling the multiple attribute in css by using attr method
  /* 1st way by using multiple times the attr method
  $(this).attr("width", "40%");
  $(this).attr("height", "40%");*/
  /**
   by chaining the attr method one after another
   $(this).attr('width','40%').attr('height','40%')
   */
  // final and smart way to add multiple attr at a time by using map data structure like an obj
  $(this).attr({ width: "40%", length: "40%" });
});

$("img#the_img").on("dblclick", function () {
  $(this).remove();
});
