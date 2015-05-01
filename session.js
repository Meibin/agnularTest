angular.module('session', []).factory('sessionFactory', function($http, $q) {

    var cokie;
    var user;
    var amigos;

    return {

        login: function($data){

            var diferido = $q.defer();

            user = $data.usuario;

            var promesa = $http.post('http://testing.singlesgalicia.es/api/auth/generate_auth_cookie/?username='+$data.usuario+'&password='+$data.pass, $data);

            promesa.success(function(data) {
                diferido.resolve(data);
                cokie = data;
            });

            promesa.error(function(data) {
              diferido.resolve(data);
              cokie = data;
            });

            return diferido.promise;
        },

        getCookie: function(){
            return cokie;
        },

        //TODO: Implement a logged in function
        isLoggedIn: function(){
            return cokie;
        },

        getAmigos: function(){

            var diferido = $q.defer();

            var promesa = $http.post('http://testing.singlesgalicia.es/api/buddypressread/friends_get_friends/?username='+user+'&cookie='+cokie, cokie);

            promesa.success(function(data) {
                diferido.resolve(data);
                amigos = data;
            });

            promesa.error(function(data) {
                diferido.resolve(data);
                amigos = data;
            });

            return diferido.promise;
        },

        amigos: function(){
            return amigos;
        }
    };
});
