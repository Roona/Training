(function (angular, _) {
    "use strict"
    var qstn = angular.module('questionsCtrl', ['engagement','EngagementQuestionsService']);
    qstn.controller("QuestionsCtrl", QuestionsCtrl);

    function QuestionsCtrl(Engagement,resolveObj,EngagementQuestionsService ) {
        self = this;
        self.Engagement = Engagement;
        EngagementQuestionsService.initialize(resolveObj.questions);
       
    }

})(window.angular);