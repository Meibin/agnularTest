"use strict;"

var modules = [
    'ngRoute',
    'ngAnimate'
];

var app = angular.module('adrian', modules)
    .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: 'MainController'
            })
            .when('/inicio', {
                templateUrl: 'inicio.html',
                controller: 'InicioController'
              })
              .when('/perfil', {
                templateUrl: 'perfil.html',
                controller: 'PerfilController'
              });
          $locationProvider.html5Mode(true);
      }]
);

app.controller('menu', ['$scope', '$location', function($scope, $location) {

}]);

app.controller('Main', [ function() {
}]);

app.controller('MainController', ['$scope', '$location', function($scope, $location) {

}]);

app.controller('InicioController', ['$scope', '$location', function($scope, $location) {

}]);

app.controller('PerfilController',['$scope', '$location', '$http', function($scope, $location, $http) {
    console.log("holaa");
    $scope.datalogin = {
        usuario: "",
        pass: ""
    }

    $scope.usuarios = [];

    $scope.anhadir = function() {
        $scope.usuarios.push({
            user: $scope.datalogin.usuario,
            pass: $scope.datalogin.pass
        });

        $scope.datalogin.usuario = "";
        $scope.datalogin.pass = "";
    }

    $scope.enviar = function() {
        var promesa = $http.post('http://cojones', $scope.datalogin);

        promesa.success(function(data, status, heads, config) {
            data.token;
        });

        promesa.error(function(data, status, heads, config) {

        });
    }

    $scope.$watch('datalogin', function(newg, old) {
        $scope.usuario = newg;
    });
}]);
