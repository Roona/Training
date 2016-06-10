(function(angular, _) {
    "use strict"
    angular.module('engagementQuestions', [])
        .directive("engagementQuestions", function(/* could do DI */) {
            return {
                restrict: "AEC",  // Attribute, Element, Class
                templateUrl: "views/Registration/Questions.html"
            };
        });
})(window.angular);