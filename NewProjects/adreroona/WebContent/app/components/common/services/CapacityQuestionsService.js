(function(angular, _) {
    "use strict"
    angular.module('CapacityQuestionsService', [])

        .service('CapacityQuestionsService', function CapacityQuestionsService() {
            var self = this;     
            self.capQuestions = [];
            
            
            this.initialize = function(capQuestions){
                if(capQuestions){
                    this.clear();
                    self.capQuestions = capQuestions;
                   
                }
            };
            this.clear = function(){
            	self.capQuestions = [];
            };
            
        });
})(window.angular);