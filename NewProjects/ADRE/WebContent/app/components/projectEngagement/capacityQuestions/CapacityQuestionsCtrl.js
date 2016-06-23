(function (angular, _) {
    "use strict"
    var cap = angular.module('capQuestionsCtrl', ['engagement','CapacityQuestionsService']);
    cap.controller("CapQuestionsCtrl", CapQuestionsCtrl);

    function CapQuestionsCtrl($http, Engagement, resolveObj,CapacityQuestionsService) {
        self = this;
        self.Engagement = Engagement;
        CapacityQuestionsService.initialize(resolveObj.capQuestions);
        //self.capQuestions = modelObj.capQuestions;
    }

})(window.angular);