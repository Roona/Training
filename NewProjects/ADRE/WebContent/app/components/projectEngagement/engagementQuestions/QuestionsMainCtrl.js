(function (angular, _) {
    "use strict"
    var qstn = angular.module('questionsMainCtrl', ['engagement','EngagementQuestionsService','EngagementTabService']);
    qstn.controller("QuestionsMainCtrl", QuestionsMainCtrl);
    
    function QuestionsMainCtrl(Engagement,EngagementQuestionsService,EngagementTabService) {
        self = this;
        self.Engagement = Engagement;
      //  self.questions = $scope.qc.questions;
     self.questions = EngagementQuestionsService.questions;
        var selectEngagementQuestion =function(){
        	if(Engagement.questions != undefined && Engagement.questions != null){        		
        		for(var i=0; i< Engagement.questions.length;i++) {
        		var tkey = Engagement.questions[i];
        		
        		 for(var q in self.questions) {
        			 
                     if(self.questions[q].key == tkey) {
                    	 self.questions[q].value = true
                     }
                 }
            }
        		
        	}
        }
        
        selectEngagementQuestion();
        self.processChangeButton = function () {
            var goCapacity = false;
            for(var q in self.questions) {
                self.questions[q].disabled = false;
            }
            //trigger capacity question route
           
            if(self.questions) {
                if (self.questions[2].value || self.questions[4].value || self.questions[5].value) {
                    goCapacity = true;
                    self.questions[9].disabled = true;
                    self.questions[10].disabled = true;
                } if(self.questions[9].value){
                    for(var q in self.questions) {
                        if(q != 9){
                            self.questions[q].disabled = true;
                        }
                    }
                } if(self.questions[10].value){
                    for(var q in self.questions) {
                        if(q != 10){
                            self.questions[q].disabled = true;
                        }
                    }
                } if (self.questions[0].value || self.questions[1].value || self.questions[3].value || self.questions[6].value || self.questions[7].value || self.questions[8].value) {
                    self.questions[9].disabled = true;
                    self.questions[10].disabled = true;
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
                }
            }
            
           // $scope.$parent.etc.tabs[1].visible = goCapacity;
            EngagementTabService.tabs[1].visible = goCapacity;
            
        };
       /* self.processChangeButton = function () {
        	
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
        };*/
        
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