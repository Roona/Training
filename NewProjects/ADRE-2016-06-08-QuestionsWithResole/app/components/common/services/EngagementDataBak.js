(function(angular, _) {
    "use strict"
    angular.module('engagementData', [])

        .factory('EngagementFactory', function($http) {
            var EngagementFactory = function(engagements) {
                this.initialize = function() {
                    // var url ='http://localhost:8090/GateWayService/rest/CommonServiceInterface/getRecords/' + engagements;
                    var url ='app/components/common/resources/fileload.json';
                    var EngagementData = $http.get(url);
                    var self = this;                    
                    
                    EngagementData.then(function(response) {
                        angular.extend(self, response.data);
                    });
                },
                function errorCallback(response){
                    console.log("Eai data error");
                };
                this.initialize();
            };
            return (EngagementFactory);
        });
})(window.angular);