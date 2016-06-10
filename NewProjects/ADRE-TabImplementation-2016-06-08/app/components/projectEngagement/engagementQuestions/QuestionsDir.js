(function(angular, _) {
    "use strict"
    angular.module('engagementQuestions', ['questionsMainCtrl'])
        .directive("engagementQuestions", function(/* could do DI */) {
            return {
                restrict: "AEC",  // Attribute, Element, Class
                templateUrl: "app/components/projectEngagement/engagementQuestions/QuestionsMain.html",
                controller: 'QuestionsMainCtrl',
                controllerAs: 'qmc'
                // resolve: {
                //     activate: function ($q) {
                //         var defer = $q.defer();
                //         defer.resolve();
                //         return defer.promise;
                //     }
                // }
            };
        });
})(window.angular);