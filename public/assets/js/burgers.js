// DEBUG: NAMES OF BURGERS DO NOT SHOW ON PAGE, ALTHOUGH THEY DO SHOW ON BACK END

// Wait to atttach handlers until DOM fully loaded
$(function() {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                // DEBUG: DEVOURED STATE IS CHANGEABLE ON CLICK, BUT NO CONSOLE.LOG TO NOTIFY OF THIS; PAGE RELOAD WORKS
                console.log("Changed devoured to: ", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                // DEBUG: CONSOLE LOG DOES NOT WORK HERE
                console.log("Created new burger");
                // Reload page to get updated list
                location.reload();
            }
        );
    });

    // DEBUG: ERROR: "burger.delete is not a function" ON BACK END --- I've added the function to orm.js
    // ON FRONT END: 500 (Internal Server Error) burgers.js:51
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("Deleted burger", id);
                // Reload page to get updated list
                location.reload();
            }
        );
    });
});