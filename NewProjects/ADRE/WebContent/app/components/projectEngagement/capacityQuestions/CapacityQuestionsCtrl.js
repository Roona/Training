(function (angular, _) {
    "use strict"
    var cap = angular.module('capQuestionsCtrl', ['engagement','capQuestions']);
    cap.controller("CapQuestionsCtrl", CapQuestionsCtrl);

    function CapQuestionsCtrl($http, Engagement, resolveObj,CapQuestions) {
        self = this;
        self.Engagement = Engagement;
        CapQuestions.initialize(resolveObj.capQuestions);
        //self.capQuestions = modelObj.capQuestions;
    }

})(window.angular);