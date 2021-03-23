
($(document).ready(function () {
    var makeRequest = (function () {
        var _search = function () {
                  var d = $("#word").val();

            $.ajax({
                type: "POST",
                url: "DictSevlet",
                data: {"Requestd": d},
                success: function (data2) {
                 
                        $("#result").html(data2);
                   

                   
                },
                error: function (e) {
                    $("#result").html(e.textResponse);
                }
            });
        };
        var getResults = function () {
            $("#btn").click(function () {
                _search();
            });
        };
        return{
            results: getResults
        };
    })();
    makeRequest.results();
}))();
