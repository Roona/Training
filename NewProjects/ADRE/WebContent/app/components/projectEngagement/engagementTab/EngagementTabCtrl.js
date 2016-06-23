(function (angular, _) {
    "use strict"
    var etc = angular.module('engagementTabCtrl', ['engagement','EngagementTabService']);
    etc.controller("EngagementTabCtrl", EngagementTabCtrl);

    function EngagementTabCtrl(Engagement,EngagementTabService) {
        self = this;
        self.Engagement = Engagement;
        self.EngagementTabService = EngagementTabService;
    }

})(window.angular);