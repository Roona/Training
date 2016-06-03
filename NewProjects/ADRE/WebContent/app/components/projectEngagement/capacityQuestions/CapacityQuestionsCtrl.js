(function (angular, _) {
    "use strict"
    var cap = angular.module('capQuestionsCtrl', ['engagement']);
    cap.controller("CapQuestionsCtrl", CapQuestionsCtrl);

    function CapQuestionsCtrl($http, Engagement) {
        self = this;
        self.Engagement = Engagement;
    }

})(window.angular);