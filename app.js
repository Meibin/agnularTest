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

app.controller('PerfilController',['$scope', '$location', '$http', function($scope, $location, $http) {
    $scope.datalogin = {
        usuario: "",
        pass: ""
    }

    $scope.enviar = function() {
        var promesa = $http.post('http://testing.singlesgalicia.es/api/auth/generate_auth_cookie/?username='+$scope.datalogin.usuario+'&password='+$scope.datalogin.pass, $scope.datalogin);

        promesa.success(function(data, status, heads, config) {
            $scope.cokie = data;
        });

        promesa.error(function(data, status, heads, config) {
            $scope.cokie = data;

        });
    }

    /*$scope.$watch('datalogin', function(newg, old) {
        $scope.usuario = newg;
    });*/

}]);

app.controller('AmigosController', ['$scope', '$location', '$http', function($scope, $location, $http) {

  $scope.usuarios = [];

  $scope.anhadir = function() {
      $scope.usuarios.push({
          user: $scope.datalogin.usuario,
          pass: $scope.datalogin.pass
      });

      $scope.datalogin.usuario = "";
      $scope.datalogin.pass = "";
  }
  var promesa = $http.post('http://testing.singlesgalicia.es/api/buddypressread/friends_get_friendship_request/?username=jnesta', $scope.datalogin);

  promesa.success(function(data, status, heads, config) {
      $scope.amigos = data;
  });

  promesa.error(function(data, status, heads, config) {

  });
}]);
