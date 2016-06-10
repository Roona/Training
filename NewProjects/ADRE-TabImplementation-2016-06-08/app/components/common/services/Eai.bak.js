(function(angular, _) {
    "use strict"
    angular.module('eaiData', [])

        .factory('EaiFactory', function($http, $q) {
            var EaiFactory = function(eai) {
                this.success = false;
                this.failReason;
                this.initialize = function() {
                    var url ='http://localhost:8090/GateWayService/rest/CommonServiceInterface/symphony/getEAI/' + eai;
                    var EaiData = $http.get(url);
                    var self = this;                    
                    
                    EaiData.then(function(response) {
                        if(response.data.eaiInfo){
                            self.success = true;
                            angular.extend(self, response.data);                            
                        } else {
                            self.failReason = response.data.failReason;
                        }    
                    },
                    function errorCallback(response){
                        console.log("Eai data error");
                    });
                };
                this.initialize();
            };
            return (EaiFactory);
        });
})(window.angular);