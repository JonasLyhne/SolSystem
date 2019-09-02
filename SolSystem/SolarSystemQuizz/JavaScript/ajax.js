$(document).ready(function () {
    $("#btn").click(function () {
        var stuff = "";
        $.ajax({
            url: "AjaxTest.aspx/GetData",
            method: "get",
            contentType: "application/json; charset=utf-8",
            data: {},
            dataType: "json",
            success: function (data) {
                stuff = data;
                console.log(data.d);
            },
            error: function(err) {
                alert(err.d);
            }
        });
    });
});