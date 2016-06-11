(function (angular, _) {
    "use strict"
    var qstn = angular.module('questionsCtrl', ['engagement']);
    qstn.controller("QuestionsCtrl", QuestionsCtrl);

    function QuestionsCtrl(Engagement,modelObj) {
        self = this;
        self.Engagement = Engagement;
        self.questions = modelObj.questions;
        // self.questions;
       
        // self.processQuestions = function() {
        //     self.Engagement.questions = [];
        //     // Engagement.questions = $filter('filter')(self.questions, { value: true });
        //     for(var q in self.questions) {
        //         if(self.questions[q].value == true) {
        //             Engagement.questions.push(self.questions[q].key);
        //         }
        //     }
        // };
    }

})(window.angular);