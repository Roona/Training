(function(angular, _) {
    "use strict"
    angular.module('capQuestions', [])

        .service('CapQuestions', function CapacityQuestions() {
            var CapacityQuestions = this;     
            CapacityQuestions.capQuestions = [];
            
            
            this.initialize = function(capQuestions){
                if(capQuestions){
                    this.clear();
                    CapacityQuestions.capQuestions = capQuestions;
                   
                }
            };
            this.clear = function(){
            	CapacityQuestions.capQuestions = [];
            };
            
        });
})(window.angular);