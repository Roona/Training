(function(angular, _) {
    "use strict"
    angular.module('engagementForm', ['ngResource'])
        .directive("engagementForm", function(/* could do DI */) {
            return {
                restrict: "AEC",  // Attribute, Element, Class
                templateUrl: "views/Registration/Engagement.html"
            };
        });
})(window.angular);