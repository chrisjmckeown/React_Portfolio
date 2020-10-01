$("#submit").on("click", function (event) {
    event.preventDefault();
    var feedback = $("#feedback")[0];
    var ccEmail = $("#email")[0].value;
    var name = $("#name")[0].value;
    var message = $("#message")[0].value;
    if (!ccEmail || !name || !message) {
        feedback.textContent = "Please enter all details";
    }
    else {
        feedback.textContent = "";
        var link = "mailto:chris.j.mckeown@hotmail.com"
            + `?cc= ${ccEmail}`
            + "&subject=" + encodeURIComponent(`Hello from ${name}`)
            + "&body=" + encodeURIComponent(message);
        window.location.href = link;
    }
});