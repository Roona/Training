(function (angular, _) {
    "use strict"
    angular.module('escSecurity', [])
        .factory('EscSecurity', ['$resource', function ($resource) {

            var authService = $resource('http://localhost:8090/GateWayService/rest/CommonServiceInterface/:serviceName', { serviceName: '@serviceName' });

            function isUserAuthorizedForService(serviceName, handleSuccess, handleError) {
                return authService.get({ serviceName: serviceName }, handleSuccess, handleError);
            }

            return {
                isUserAuthorizedForService: isUserAuthorizedForService
            }

        }]);

})(window.angular);