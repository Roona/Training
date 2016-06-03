(function(angular, _) {
    "use strict"
    angular.module('projectLaunchMain', ['projectLaunchMainCtrl'])
        .directive("projectLaunchMain", function(/* could do DI */) {
            return {
                restrict: "AEC",  // Attribute, Element, Class
                templateUrl: 'app/components/projectEngagement/projectLaunch/ProjectLaunchMain.html',      
                controller: 'ProjectLaunchMainCtrl',
                controllerAs: 'plmc'
            };
        });
})(window.angular);