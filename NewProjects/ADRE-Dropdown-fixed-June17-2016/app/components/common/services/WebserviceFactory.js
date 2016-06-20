// (function(angular, _) {
//     "use strict"
//     angular.module('webserviceFactory', [])

//     .service('WebserviceFactory', ['$http', '$q', function($http, $q) {
         
//         var getEngagements = this;

//             getEngagements.getPromise = function (url) {
//                 var deferred = $q.defer();

//                 $http.get(url)
//                     .then(
//                         function (response) {
//                             deferred.resolve(response);
//                         }, function (rejected) {
//                             deferred.reject(response);
//                         }
//                     );
//                 //Promise to be returned
//                 return deferred.promise;
//             }
//         }])
// })(window.angular);
(function(angular, _) {
    "use strict"
    angular.module('webserviceFactory', [])
        .service('WebserviceFactory', ['$http', '$q', function($http, $q) {
            var deferObject, 
            getEngagements = {
            getPromise: function(url) {
                //var promise = $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/getRecords/' + engagements),                
                var promise = $http.get(url),
                    deferObject = deferObject || $q.defer();
                    
                    promise.then(
                        function(response) {
                            deferObject.resolve(response);
                        }, 
                        function(reason) {                            
                            deferObject.reject(reason);                            
                        }
                    );
            
                return deferObject.promise;
                }
            };
            return getEngagements;
        }]);
})(window.angular);