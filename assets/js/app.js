var app = angular.module("dokuday", ["angularFileUpload", "ui.knob"]);
app.controller("PrintCtrl",
    ["$scope", "$http", "$upload",
        function ($s,$h, $u) {
            $s.showProgress = false;
            $s.statusSuccess = false;
            $s.statusError = true;
            $s.file = {};

            $s.selectFile = function() {
                $(".input-upload").click();
            };
            // Helper function that formats the file sizes
            $s.formatFileSize = function (bytes) {
                if (typeof bytes !== 'number') {
                    return '';
                }

                if (bytes >= 1000000000) {
                    return (bytes / 1000000000).toFixed(2) + ' GB';
                }

                if (bytes >= 1000000) {
                    return (bytes / 1000000).toFixed(2) + ' MB';
                }

                return (bytes / 1000).toFixed(2) + ' KB';
            }

            $s.onFileSelect = function($files) {
                var file = $files[0];
                if (file.name.length > 25) {
                    $s.file.nama = file.name.substring(22, 0) + "...";
                } else {
                    $s.file.nama = file.name;
                }
                $s.file.size = $s.formatFileSize(file.size);
                console.log(file);
                if (file !== null) {
                    $s.showProgress = true;
                }
                console.log($s.showProgress);
            };

            // Circular progress
            $s.data = 75;
            $s.knobOptions = {
              "width":32,
              "height":32,
              "displayInput": false,
              "bgColor": "#18202b",
              "fgColor":"#3ebd98",
              "readOnly": true
            };
}]);

var cuk = "as";