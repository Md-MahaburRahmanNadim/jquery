// $(document).ready(function(){ old way to select the docoment. the version 3 is given below
$(function () {
  // this line of code give us opportunites to inject jquery code after the open body tag
  // $("#steps li").css("color", "blue"); this select all li inside of the #steps id
  // $("#steps > li").css("color", "red"); // direct child selector
  // let's now learn about the filter selector in jquery which is called in css as a psodue selector
  $("#steps li:first, #grand-child li:first").css("color", "blue");
});
