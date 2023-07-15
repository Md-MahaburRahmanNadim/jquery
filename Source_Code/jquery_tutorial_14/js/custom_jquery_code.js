$(function () {
  /**
   *   I would like you to write the jquery code for this page to behave as I'm about to show you. When I click on these details button, it should show me the price of the particular book and the Author. And then it also highlights the background yellow. And also hide the button.
   */
  $("#books_div button").click(function (e) {
    $(this).parent().css("background-color", "yellow");
    const getPrice = $(this).closest(".book").data("price");
    const getAuthor = $(this).closest(".book").data("author");
    const details = `<p>Price: ${getPrice}</p><p>Author: ${getAuthor}</p>`;
    /**
     * this is the wrong way to doing this if we know that where we want to append the details inside the button element itself and we remvoe the button element the details will also be removed from the DOM because it is inside the button element
     * 
     * 
    $(this).append(details).remove();
     */

    // console.log(getPrice, getAuthor);
    /**
     * this is one way to doing this if we know that where we want to append the details
     * $(this).closest(".book").append(details);
    $(this).remove();
     */
    $(this).after(details).remove();
    e.stopPropagation();
  });
  /**
   * new requirement to learn aobut the jquery event life cycle and how to use the jquery event life cycle to solve this problem
   * 
   I wanted to add some functionality that if a user clicks on this box or this box anywhere
outside of this button, within this particular box, we want an alert to show up and notify the user
that, hey, if you want to see the details, you click the button, don't click anywhere else.
So if I click here (outside of the button anywhere in the div which has black border), it's not showing me any of the details.

I want that alert box to say to me that, hey, click the button to get the details.
OK, how would I implement that?

explanation with figure is in the docs file
   */
  $("#books_div").on("click", function (event) {
    alert("Please click on the button to get the details");
  });
});
