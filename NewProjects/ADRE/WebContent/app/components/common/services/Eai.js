(function(angular, _) {
    "use strict"
    angular.module('eaiData', [])

        .service('EaiFactory', function($http, $q) {
            var deferred = $q.defer();
            
            this.getEai = function(eai) {
                return $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/symphony/getEAI/' + eai)
                    .then(function(response) {
                        if(response.data.eaiInfo){
                            return response.data.eaiInfo;                            
                        } else {
                            deferred.reject(response);
                            return deferred.promise;
                        }    
                    });
            };
        });
})(window.angular);