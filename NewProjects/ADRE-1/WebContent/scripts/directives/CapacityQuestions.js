(function(angular, _) {
    "use strict"
    angular.module('capacityQuestions', [])
        .directive("capacityQuestions", function(/* could do DI */) {
            return {
                restrict: "AEC",  // Attribute, Element, Class
                templateUrl: "views/Registration/CapacityQuestions.html"
            };
        });
})(window.angular);