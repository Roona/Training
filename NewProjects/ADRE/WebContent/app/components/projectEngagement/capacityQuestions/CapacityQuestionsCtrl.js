(function (angular, _) {
    "use strict"
    var cap = angular.module('capQuestionsCtrl', ['engagement','CapacityQuestionsService']);
    cap.controller("CapQuestionsCtrl", CapQuestionsCtrl);

    function CapQuestionsCtrl(Engagement, resolveObj,CapacityQuestionsService) {
        self = this;
        self.Engagement = Engagement;
        CapacityQuestionsService.initialize(resolveObj.capQuestions);
    }

})(window.angular);