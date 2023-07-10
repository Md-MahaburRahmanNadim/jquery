$(function () {
  // $(":header").css({"border" :"1px solid red"});
  // assignment target those div that do not have header
  // $("div:not(:header)").css({ 'border': "1px solid red" }); wrong answer
  // $('div:has(:not(:header))').css({'border':'1px solid red'}); this work file
  $('div:not(:has(:header))').css({'border':'1px solid red'});
});
