"use strict;"

var modules = [
    'ngRoute',
    'ngAnimate',
    'session'
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
            })
            .when('/amigos', {
                templateUrl: 'amigos.html',
                controller: 'AmigosController'
            });
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

app.controller('PerfilController',['$scope', '$location', 'sessionFactory', function($scope, $location, sessionFactory) {
    $scope.datalogin = {
        usuario: "",
        pass: ""
    };

    $scope.enviar = function() {
        $scope.cookie = 'undefined';
        sessionFactory.login($scope.datalogin).then(function(data) {
            $scope.cookie = data;
        });
    };

}]);

app.controller('AmigosController', ['$scope', '$location', '$http', 'sessionFactory', function($scope, $location, $http, sessionFactory) {

  sessionFactory.getAmigos($scope.datalogin).then(function(data) {
      $scope.amigos = data;
  });

}]);
