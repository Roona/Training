(function (angular, _) {
    "use strict"
    var cap = angular.module('capQuestionsMainCtrl', ['engagement','CapacityQuestionsService']);
    cap.controller("CapQuestionsMainCtrl", CapQuestionsMainCtrl);

    function CapQuestionsMainCtrl(Engagement,CapacityQuestionsService) {
        self = this;
        self.Engagement = Engagement;
        self.capQuestions=CapacityQuestionsService.capQuestions;
        
        var selectCapacityQuestion =function(){
        	if(Engagement.capQuestions != undefined && Engagement.capQuestions != null){   
        	for(var i=0; i< Engagement.capQuestions.length;i++) {
        		var tkey = Engagement.capQuestions[i];
        		
        		 for(var q in self.capQuestions) {
        			 
                     if(self.capQuestions[q].key == tkey) {
                    	 self.capQuestions[q].value = true
                     }
                 }
            }
        }
        }
        
        selectCapacityQuestion();
        
        self.processQuestions = function() {
            self.Engagement.capQuestions = [];
            for(var q in self.capQuestions) {
                if(self.capQuestions[q].value == true) {
                    Engagement.capQuestions.push(self.capQuestions[q].key);
                    Engagement.tempCapQuestions.push(self.capQuestions[q].key);
                }
            }
        };

    }

})(window.angular);