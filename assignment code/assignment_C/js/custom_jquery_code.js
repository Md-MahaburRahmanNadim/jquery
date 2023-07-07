$("button").on("click", function () {
  // Fill In your Code here
  const quantData = parseInt($("#quant_1").val()); // helping article:https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
  //   console.log(typeof quantData);
  //   console.log(quantData);
  const rateData = parseInt($("#rate_1").val());
  $("#amount_1").val(quantData * rateData);
  $("#output").text(
    `Amount Charged for quantity of ${quantData} is $${quantData * rateData}`
  );
  $("#amount_1").removeAttr("id");
});

$(".txtbox").on("click", () => {
  $(".addAttr").attr("id", "amount_1");
});

/**
 When I click calculate button the id selector is gone. for that reason we can applied the total amount on that id next click. to solve this problem we can capture click event on the any on two input field when anyone click on that then the id attribute will added again

 instructuor solution: One way to fix this is to create a new class in css to contain the logic to be {display: none} . Then remove the style for #amount_1 in css. Assign this new class to the textbox with id #amount_1 in the html. Then in jQuery, instead of removeAttr()  you can use the removeClass()  method to get rid of the class that hides the textbox.
 
 we also use .show method instade of removeing the id which sove the problem very nicly

 his property shows only those elements that are hidden using either jQuery hide() method, or the CSS display property.
 */
