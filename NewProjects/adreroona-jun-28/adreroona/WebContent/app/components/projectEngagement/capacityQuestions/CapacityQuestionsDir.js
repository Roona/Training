(function(angular, _) {
    "use strict"
    angular.module('capacityQuestions', ['capQuestionsMainCtrl'])
        .directive("capacityQuestions", function(/* could do DI */) {
            return {
                restrict: "AEC",  // Attribute, Element, Class
                templateUrl: "app/components/projectEngagement/capacityQuestions/CapacityQuestionsMain.html",
                controller: 'CapQuestionsMainCtrl',
                controllerAs: 'cmc'
            };
        });
})(window.angular);