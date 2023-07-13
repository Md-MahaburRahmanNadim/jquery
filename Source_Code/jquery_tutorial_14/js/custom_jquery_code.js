$(function () {
  /**
   *   I would like you to write the jquery code for this page to behave as I'm about to show you. When I click on these details button, it should show me the price of the particular book and the Author. And then it also highlights the background yellow. And also hide the button.
   */
  $("#books_div button").click(function () {
    $(this).parent().css("background-color", "yellow");
    const getPrice = $(this).closest(".book").data("price");
    const getAuthor = $(this).closest(".book").data("author");
    const details = `<p>Price: ${getPrice}</p><p>Author: ${getAuthor}</p>`;
    // console.log(getPrice, getAuthor);
    /**
     * this is one way to doing this if we know that where we want to append the details
     * $(this).closest(".book").append(details);
    $(this).remove();
     */
    $(this).after(details).remove();
  });
});
