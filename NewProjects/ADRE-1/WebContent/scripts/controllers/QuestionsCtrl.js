(function (angular, _) {
    "use strict"
    var qstn = angular.module('questionsCtrl', []);
    qstn.controller("QuestionsCtrl", QuestionsCtrl);

    function QuestionsCtrl($scope, $http, Engagement, $filter) {
        $scope.Engagement = Engagement;
        $scope.questions;

        $http.get('resources/questions.json').success(function (data) {
            $scope.questions = data.questions;
            for(var q in Engagement.questions) {
                $scope.questions[Engagement.questions[q]].value = true;
            }
            $scope.processChangeButton();
        });

        $scope.processChangeButton = function () {
            var goCapacity = false;
            //trigger capacity question route
            
            if($scope.questions) {
                if ($scope.questions[2].value || $scope.questions[4].value || $scope.questions[5].value || $scope.questions[6].value || $scope.questions[9].value) {
                    goCapacity = true; 
                } else if ($scope.questions[10].value) {
                    //POC
                    
                }
            }
            //Engagement.questions
            $scope.Engagement.capacityEngagement = goCapacity;
        };
        
        $scope.processPoc = function() {
            //if POC was selected, deselect other checkboxes and disable them
            
        }

        $scope.processQuestions = function() {
            Engagement.questions = [];
            // Engagement.questions = $filter('filter')($scope.questions, { value: true });
            for(var q in $scope.questions) {
                if($scope.questions[q].value == true) {
                    Engagement.questions.push($scope.questions[q].key);
                }
            }
        };
    }

})(window.angular);