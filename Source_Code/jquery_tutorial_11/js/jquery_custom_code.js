$(function () {
  // desendent selector. select all the p tag that are inside the div tag
  // $('#smart p').css({ 'border': '1px solid red' });
  // $('#smart > p').css({ 'border': '1px solid red' });// this will select only direct child
  // $("h1 ~ p").css({ border: "1px solid red" }); // this will select all the sibling of the h1 meaning those p tag must have same parent as h1 and must be after h1 tag. this is called general sibling selector. ALL sibling in the same level will be selected not just the next sibling like + selector does
  // $("#smart ~ div").css({ color: "red" });
  // $("#steps ~ p").css({ "background-color": "yellow" });
  // $("#steps + p").css({ "font-size": "3rem" }); // this select all p immediately after the steps id tag. this is called adjacent sibling selector
  // not equal to attribute selector
  // $("p[class!= 'instruct_title']").css({ border: "1px solid red" });
  // $("li[class^='imp']").css({ border: "1px solid red" }); // select all li that class start with imp
  // $("li[class$='ant']").css({ border: "1px solid red" }); // select all li that class end with ant
  // $("div[id*='_']").css({ border: "1px solid red" }); // select all li that class contain mp anywhere in the class name
  // $("li[class~= 'importan']").css({ border: "1px solid red" }); // select all li that class contain whole words inside of that class name. intire word must be match
  // filter selector
  // $("div:has(p)").css({ border: "1px solid red" }); // select all div that has p tag inside of it. give me all the divs that have the paragraph tag inside of it
  // let's target h1, h2, h3, h4, h5, h6 tag that called header tag
  // $(":header").css({ border: "1px solid red" });
  // $("div:has(:header)").css({ border: "1px solid red" }); // this will select all the div that has header tag inside of it
  // $("li:not(.important)").css({ border: "1px solid red" }); // this will select all the li that do not have class important
  // how to you target those div that do not have header tag?
  $("div:not(:header)").css({ border: "1px solid red" }); // this will select all the div that do not have header tag inside of it
  // $(":header").css({"border" :"1px solid red"});
  // assignment target those div that do not have header
  // $("div:not(:header)").css({ 'border': "1px solid red" }); wrong answer
  // $('div:has(:not(:header))').css({'border':'1px solid red'}); this work file
  // $("div:not(:has(:header))").css({ border: "1px solid red" });
});
