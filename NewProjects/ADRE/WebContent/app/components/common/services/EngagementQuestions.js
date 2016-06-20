(function(angular, _) {
    "use strict"
    angular.module('engQuestions', [])

        .service('EngQuestions', function EngagementQuestions() {
            var EngagementQuestions = this;     
            EngagementQuestions.questions = [];
            
            
            this.initialize = function(questions){
                if(questions){
                    this.clear();
                    EngagementQuestions.questions = questions;
                   
                }
            };
            this.clear = function(){
            	EngagementQuestions.questions = [];
            };
            
        });
})(window.angular);