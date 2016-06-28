(function (angular, _) {
    "use strict"
    var login = angular.module('authService', []);
    login.factory('AuthService', function () {
        var currentUser;

        return {
            login: function () {
                //check OBLIX
                currentUser = "658209";
             },
            logout: function() {
                //Expire OBLIX
                currentUser = "";
              },
            isLoggedIn: function() {
                //Get OBLIX information
                if(currentUser){
                    return true;
                } else {
                    return false;
                }
             },
            currentUser: function() { return currentUser; }
        };
    });
})(window.angular);