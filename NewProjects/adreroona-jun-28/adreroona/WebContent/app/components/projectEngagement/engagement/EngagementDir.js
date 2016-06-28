(function(angular, _) {
    "use strict"
    angular.module('engagementForm', ['engagementMainCtrl'])
        .directive("engagementForm", function(/* could do DI */) {
            return {
                restrict: "AEC",  // Attribute, Element, Class
                templateUrl: "app/components/projectEngagement/engagement/EngagementMain.html",
                controller: 'EngagementMainCtrl',
                controllerAs: 'emc'
            };
        });
})(window.angular);