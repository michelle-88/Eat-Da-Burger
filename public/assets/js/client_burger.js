$(document).ready(function() {
    // Click listener for 'Devour it!' button
    $(".eat-burger").on("click", function(event) {
        // Grab burger id & new 'eatenstate' from button
        var id = $(this).attr("data-id");
        var eatenState = $(this).attr("data-eatenstate");

        var newBurgerState = {
            devoured: eatenState
        };

        // Send PUT request to server with burger id in param & new 'eatenstate' in body
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(function() {
            // Reload page to update burger position on page
            location.reload();
        });
    });







});