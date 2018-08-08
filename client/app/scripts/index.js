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
    .controller("registerController", function ($scope, $log) {
        $scope.registerUser = function () {

            $scope.errorMatchPassword = "";
            var user = {
                name : "",
                email : "",
                password : ""
            };

            this.checkPasswords();
            this.validPassword($scope.user.password);

            if($scope.validPasswords){
                user = $scope.user;
                $log.info(user);
            }
            else {
                $scope.errorMatchPassword = "Passwords don't match!"
            }


        };



        $scope.checkPasswords = function () {
            var password = $scope.user.password;
            var confirm = $scope.user.confirm;

            $scope.validPasswords = password === confirm;

            $log.info($scope.validPasswords)
        };

        $scope.validPassword = function (password) {

            $log.info(password);
            $scope.errorValidPassword = "";

            var error = "Password must contain 8 characters \n" +
                "Password must contain an uppercase \n" +
                "Password must contain an lowercase \n" +
                "Password must contain an number \n";

            if(password.length < 8){
                $scope.errorValidPassword = error;
            }

            else if(password.match(/[A-z]/)){
                $scope.errorValidPassword = error;
            }

            else if(password.match(/[a-z]/)){
                $scope.errorValidPassword = error;
            }

            else if(password.match(/[A-Z]/)){
                $scope.errorValidPassword = error;
            }
        }

    });