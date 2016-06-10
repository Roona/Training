(function (angular, _) {
    "use strict"
    var cap = angular.module('capQuestionsCtrl', []);
    cap.controller("CapQuestionsCtrl", CapQuestionsCtrl);

    function CapQuestionsCtrl($scope, $http, Engagement) {
        $scope.Engagement = Engagement;

        $http.get('resources/capQuestions.json').success(function (data) {
            $scope.questions = data.questions;
            for(var q in Engagement.capQuestions) {
                $scope.questions[Engagement.capQuestions[q]].value = true;
            }
        });
        
        $scope.processQuestions = function() {
            Engagement.capQuestions = [];
            for(var q in $scope.questions) {
                if($scope.questions[q].value == true) {
                    Engagement.capQuestions.push($scope.questions[q].key);
                }
            }
        };

    }

})(window.angular);