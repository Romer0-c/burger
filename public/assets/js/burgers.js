$(function() {
  $(".update-devour").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
  
    // var newState = $(this).data("newsleep");

    const newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
        console.log("Burger is now devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger-input").val(),
      devoured: 0 //$("[name=sleepy]:checked").val().trim()
    };
      console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
});

