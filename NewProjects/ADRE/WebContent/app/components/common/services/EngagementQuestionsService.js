(function(angular, _) {
    "use strict"
    angular.module('EngagementQuestionsService', [])

        .service('EngagementQuestionsService', function EngagementQuestionsService() {
         var self = this;     
            self.questions = [];
            
            
            this.initialize = function(questions){
                if(questions){
                    this.clear();
                    self.questions = questions;
                   
                }
            };
            this.clear = function(){
            	self.questions = [];
            };
            
        });
})(window.angular);