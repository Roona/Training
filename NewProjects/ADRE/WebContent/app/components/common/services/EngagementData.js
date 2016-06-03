(function(angular, _) {
    "use strict"
    angular.module('engagementData', [])

        .service('EngagementFactory', function($http, $q) {
            var deferred = $q.defer();
            
            this.getEngagements = function() {
                // return $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/getRecords/' + engagements)
                return $http.get('app/components/common/resources/fileload.json')
                    .then(function(response) {
                        if(response.data.configDetailList){
                            return response.data.configDetailList;                            
                        } else {
                            deferred.reject(response);
                            return deferred.promise;
                        }    
                    });
            };
        });
})(window.angular);