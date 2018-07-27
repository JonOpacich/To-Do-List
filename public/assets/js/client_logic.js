// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".status").on("click", event=> {
        let id = $(this).data("id");
        let newStatus = $(this).data("complete");

        let newStatusState = {
            complete: newStatus
        };

        // Send the PUT request.
        $.ajax("/api/todo/" + id, {
            type: "PUT",
            data: newStatusState
        }).then(
            function () {
                console.log("changed sleep to", newStatus);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newTask = {
            list_item: $("#task-input").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/todo", {
            type: "POST",
            data: newTask
        }).then(
            function () {
                console.log("created new cat"); //delete
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
