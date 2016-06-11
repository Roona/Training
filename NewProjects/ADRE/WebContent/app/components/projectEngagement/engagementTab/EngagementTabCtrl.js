(function (angular, _) {
    "use strict"
    var etc = angular.module('engagementTabCtrl', ['engagement']);
    etc.controller("EngagementTabCtrl", EngagementTabCtrl);

    function EngagementTabCtrl(Engagement,modelObj) {
        self = this;
        self.Engagement = Engagement;
    }

})(window.angular);