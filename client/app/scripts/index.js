var app = angular.module('main',['ngRoute']);

app.config(function ($routeProvider){

    $routeProvider
        .when("/", {
            templateUrl: '/client/app/views/login.html',
            controller: "loginController"
        })
        .when("/home", {
            templateUrl: "/client/app/views/home.html",
            controller: "homeController"
        })
        .when("/register", {
            templateUrl: "/client/app/views/register.html",
            controller: "registerController"
        })
        .otherwise({
            redirectTo : '/'
    });
})
    .controller("homeController", function ($scope, $http,$log) {
        $http({
            method:'GET',
            url:'http://localhost:8080/all-users'})
                .then(function (response) {
                    $log.info(response);
                    console.log(response.name);
                })
    })
    .controller("loginController", function ($scope) {
    })
    .controller("registerController", function ($scope) {

    });