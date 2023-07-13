$(function () {
  /**
   *   I would like you to write the jquery code for this page to behave as I'm about to show you. When I click on these details button, it should show me the price of the particular book and the Author. And then it also highlights the background yellow. And also hide the button.
   */
  $("#books_div button").mouseenter(function () {
    $(this).click(function () {
      $(this).parent().css("background-color", "yellow");
      const getPrice = $(this).parent().data("price");
      const getAuthor = $(this).parent().data("author");
      $(this)
        .parent()
        .append($("<p>Price: " + getPrice + "</p>"));
      $(this)
        .parent()
        .append($("<p>Author: " + getAuthor + "</p>"));
      // $(this).off("click"); // This will remove the click event from the button
      $(this).hide();
    });
  });
});
