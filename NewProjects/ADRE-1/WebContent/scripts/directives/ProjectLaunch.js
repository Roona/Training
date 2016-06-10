(function(angular, _) {
    "use strict"
    angular.module('projectLaunch', [])
        .directive("projectLaunch", function(/* could do DI */) {
            return {
                restrict: "AEC",  // Attribute, Element, Class
                templateUrl: 'views/Registration/ProjectLaunch.html'
            };
        });
})(window.angular);