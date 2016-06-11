(function (angular, _) {
    "use strict"
    var qstn = angular.module('questionsMainCtrl', ['webserviceFactory', 'engagement']);
    qstn.controller("QuestionsMainCtrl", QuestionsMainCtrl);
    
    function QuestionsMainCtrl($http, Engagement, $filter, WebserviceFactory, $scope) {
        self = this;
        self.Engagement = Engagement;
        self.questions = $scope.qc.questions;
        
        
        var selectEngagementQuestion =function(){
        	
        	for(var i=0; i< Engagement.questions.length;i++) {
        		var tkey = Engagement.questions[i];
        		
        		 for(var q in self.questions) {
        			 
                     if(self.questions[q].key == tkey) {
                    	 self.questions[q].value = true
                     }
                 }
            }
        }
        
        selectEngagementQuestion();
        
        self.processChangeButton = function () {
        	
            var goCapacity = false;
            //trigger capacity question route
            $scope.$parent.$parent.tabs[1].visible = false;
            if(self.questions) {
                if (self.questions[2].value || self.questions[4].value || self.questions[5].value || self.questions[6].value || self.questions[9].value) {
                    goCapacity = true; 
                    $scope.$parent.$parent.tabs[1].visible = true;
                } else if (self.questions[10].value) {
                    //POC
                    
                }
               
            }
            //Engagement.questions
            self.Engagement.capacityEngagement = goCapacity;
            
            //update stored questions
            self.Engagement.questions = [];
            for(var q in self.questions) {
                if(self.questions[q].value == true) {
                    Engagement.questions.push(self.questions[q].key);
                    Engagement.tempQuestions.push(self.questions[q].key);
                }
            }
        };
        
        /*self.getQuestions = function() {
            // var defferred = $q.defer();
            
            // return $http.get('app/components/common/resources/questions.json')
            //     .then(function (response) {
            //         self.questions = response.data.questions;
            //         for(var q in self.Engagement.questions) {
            //             self.questions[self.Engagement.questions[q]].value = true;
            //         }
            //     });
            var promise = WebserviceFactory.getPromise('app/components/common/resources/questions.json');
            promise.then(function (response) {
                self.questions = response.data.questions;
            },
            function(reason) {
                alert('Failed');
            });
        };*/
        
        self.processPoc = function() {
            //if POC was selected, deselect other checkboxes and disable them
            
        }

    }

})(window.angular);