var app = angular.module("caleg", ['ngRoute', 'chieffancypants.loadingBar']);
app.config(["$routeProvider",
  function($route) {
    $route
      .when("/", {
        templateUrl: "assets/views/home.html",
        controller: "HomeCtrl" 
      })
      .when("/beranda", {
        templateUrl: "assets/views/home.html",
        controller: "HomeCtrl" 
      })
      .when("/tentang", {
        templateUrl: "assets/views/tentang.html",
        controller: "TentangCtrl"
      })
      .when("/dapil", {
        templateUrl: "assets/views/dapil.html",
        controller: "DapilCtrl"
      })
      .when("/dapil/:id", {
        templateUrl: "assets/views/daftar-caleg.html",
        controller: "DaftarCalegCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });
}]);
app.controller("DapilCtrl", 
  ["$scope", "$http",
  function ($s,$h) {
  $s.statusContent = true;
  $s.semuaDapil = [];
  $s.getDapil = function () {
    var key = "40381f1d8123102fd74d85aef44d70d5";
    var url = "http://api.pemiluapi.org/candidate/api/dapil";
    $h.get(url, {params: {apiKey: key, callback: "JSON_CALLBACK"}})
      .success(function (data,status, header, config) {
        $s.semuaDapil = data.data.results.dapil;
        if ($s.semuaDapil) {
          $s.statusContent = false;
        }
      })
      .error(function (data,status,header,config) {
        var loadingStatus = document.getElementsByClassName("loading-status")[0];
        loadingStatus.textContent = "Tidak bisa mengambil data dari server, periksa koneksi internet anda.";
      });
  };
  $s.getDapil();
  
}]);

var cuk = "as";