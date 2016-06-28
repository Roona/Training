(function(angular, _) {
    "use strict"
    angular.module('escSecurity', [])
/**
 * Directive used to determine if an element should be readonly using authorization.
 * By default the directive derive the resource name by taking the ngModel attribute
 * and strip off all data prior to the last '.'
 * Alternatively, you can set a 'based-on-element' attribute to determine the current element's
 * state based on another elements state
 *
 * -- this will authorize the current user for modification rights to property "firstName" using resource "firstName"
 * <input type="text" ng-model="anything.firstName" authorize/>
 *
 * -- this will authorize the current user for modification rights to property "firstName" using resource "isThisGuyAnAdmin"
 * <input type="text" ng-model="anything.firstName" authorize resource-name="something.relatedProperty"/>
 *
 */
.directive('authorize', function($resource, $http, jsonFilter){
    return {
        restrict: 'A',
        link: function(scope, element, attr){

            /*
             * takes the ngModel attribute from the element and strips everything
             * up to the last '.' to find the actual data element
             */
            // var elementToAuthorize = attr.ngModel.replace(/[\w\W]+\./g,"");
            // var elementToAuthorize = attr.id;

            /*
             * if we have a basedonelement, we use that
             */
            // if(attr.resourceName){
            //     elementToAuthorize = attr.resourceName.replace(/[\w\W]+\./g,"");
            // }

            // console.log("authorizing " + attr.ngModel + " with "+ elementToAuthorize);

            // commonResources.isUserAuthorizedForService(elementToAuthorize, function success(result){
            //                                                         if(result.isAuthorized === "false"){
            //                                                             element.attr("disabled", "disabled");
            //                                                         }
            //                                                         },
            //                                                         function failure(response){
            //                                                             console.log("IN failure, response is "+response.status);
            //                                                         });
            var params = {
                userId: 658209,
                resourceName: attr.id,
                action: "All"
            }

            $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/isAuthorized' , jsonFilter(params))
                .then(function successCallback(response) {
                    if (response) {
                        // valid ITG 128302
                        // $scope.Engagement.dataDetails.itgField = response.data.statusCode;
                    } else {
                        // $scope.itgError = response.data.failReason;
                    }
                },
                function errorCallback(response) {
                    console.log("ADRE Error authorizing" + response);
                });
        }
    }
});
})(window.angular);