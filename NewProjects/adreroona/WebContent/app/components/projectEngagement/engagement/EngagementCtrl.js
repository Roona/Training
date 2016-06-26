(function (angular, _) {
    "use strict"
    var eng = angular.module('engagementCtrl', ['IAListService']);
    eng.controller("EngagementCtrl", EngagementCtrl);

    function EngagementCtrl(IAListService,resolveObj) {
        self = this;
       // self.Engagement = Engagement;
        IAListService.initialize(resolveObj.iaNames);
                
    }

})(window.angular);