
angular.module('session', []).factory('sessionFactory', function() {

    var cokie;
    var amigos;

    return {

        login: function($data, $http){
            var promesa = $http.post('http://testing.singlesgalicia.es/api/auth/generate_auth_cookie/?username='+$data.usuario+'&password='+$data.pass, $data);

            promesa.success(function(data, status, heads, config) {
                return cokie = data;
            });

            promesa.error(function(data, status, heads, config) {
                return cokie = data;
            });
        },

        getCookie: function(){
            return cokie;
        },

        isLoggedIn: function(){
            return cokie.status;
        },

        getAmigos: function($http){
            var promesa = $http.post('http://testing.singlesgalicia.es/api/buddypressread/friends_get_friends/?username=jnesta&cookie='+cokie, cokie);

            promesa.success(function(data, status, heads, config) {
                return amigos = data;
            });

            promesa.error(function(data, status, heads, config) {
                return amigos = data;
            });
        },

        amigos: function(){
            return amigos;
        }
    }
});
