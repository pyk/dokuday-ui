var app = angular.module("dokuday", []);
app.controller("PrintCtrl",
    ["$scope", "$http",
        function ($s,$h) {

        $s.selectFile = function() {
            $(".input-upload").click();
        };
}]);

var cuk = "as";