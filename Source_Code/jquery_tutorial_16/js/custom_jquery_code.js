// You'll need the below URLs while following along with the lecture for practice.
// var root = "https://jsonplaceholder.typicode.com/posts/1";
// var root = "https://jsonplaceholder.typicode.com/comments";
// var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
// var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html"

$(function () {
  $("#btn_1").click(function () {
    // $.get(
    //   "https://jsonplaceholder.typicode.com/posts/1",
    //   //   function (data, status) {
    //   function (response, status) {
    //     console.log(response.title);
    //     console.log(status);
    //   }
    // );
    // load method
    // const url =
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html";
    // we can get specific element from the remote page by modifying the url
    // url =
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html table fieldset:first";
    // url =
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html table fieldset:last"; // table fieldset:last those are the css selector. this selector only work with the load method
    // $("div.main").load(url); // load method is used to load the data from the server and put it in the selected element
    // create a ajax request
    // const url = "https://jsonplaceholder.typicode.com/posts/1";
    // const url = "https://jsonplaceholder.typicode.com/comments";
    const url =
      "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";

    $.ajax({
      url,
      method: "GET",
      //   datatype: "json",
      datatype: "json",
      success: function (response) {
        // $("div.main").html(response.title);
        // $("div.main").html(response[0].name);
        $("div.main").html(response);
        console.log(response);
      },
      error: function (request, errorType, errorMessage) {
        console.log(errorMessage);
      },
      timeout: 3000,
      beforeSend: function () {
        console.log("Before Send"); // before sending the request to the server this function will be called
      },
      complete: function () {
        console.log("Complete"); // after getting the response from the server this function will be called
      },
    });
  });
});
