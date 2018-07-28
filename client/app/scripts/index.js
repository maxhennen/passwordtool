var app = angular.module('main',['ngRoute']);

app.config(function ($routeProvider){
    console.log("erthjy" + $routeProvider);
    $routeProvider
        .when("/", {
            templateUrl: '../views/login.html',
            controller: "loginController",
            css : '../views/style.css'
        })
        .when("/home", {
            templateUrl: "../views/home.html",
            controller: "homeController"
        })
        .when("/register", {
            templateUrl: "../views/register.html",
            controller: "registerController"
        }).otherwise({
            redirectTo : ""
    });
})
    .controller("homeController", function ($scope, $http) {

        $scope.message = "Hoi";

        $http.get("http://localhost:8080/all-users")
            .then(function (response) {
                $scope.users = response.data;
            });
    })
    .controller("loginController", function ($scope) {
    })
    .controller("registerController", function ($scope) {

    });