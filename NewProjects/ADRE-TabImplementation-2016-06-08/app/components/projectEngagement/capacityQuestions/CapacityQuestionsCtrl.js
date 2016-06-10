(function (angular, _) {
    "use strict"
    var cap = angular.module('capQuestionsCtrl', ['engagement']);
    cap.controller("CapQuestionsCtrl", CapQuestionsCtrl);

    function CapQuestionsCtrl($http, Engagement, modelObj) {
        self = this;
        self.Engagement = Engagement;
        self.capQuestions = modelObj.capQuestions;
    }

})(window.angular);