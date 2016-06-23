(function (angular, _) {
    "use strict"
    var cap = angular.module('capQuestionsMainCtrl', ['engagement','CapacityQuestionsService']);
    cap.controller("CapQuestionsMainCtrl", CapQuestionsMainCtrl);

    function CapQuestionsMainCtrl($scope, Engagement,CapacityQuestionsService) {
        self = this;
        self.Engagement = Engagement;
        //self.capQuestions = $scope.cqc.capQuestions;;
        self.capQuestions=CapacityQuestionsService.capQuestions;
       /* activate();

        // self.getCapQuestions = function() {
        function activate() {
            $http.get('app/components/common/resources/capQuestions.json').success(function (data) {
                self.capQuestions = data.questions;
                for(var q in self.Engagement.capQuestions) {
                    self.capQuestions[self.Engagement.capQuestions[q]].value = true;
                }
            });
        }*/
        
        
        
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