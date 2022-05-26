$(document).ready(function () {

    //mask
    $("#validity").mask("99/99", {
        placeholder: "MM/YY"
    });
    $("#cvv").mask("999", {
        placeholder: ""
    });
    $("#number-card").mask("9999  9999  9999  9999", {
        placeholder: ""
    });

})