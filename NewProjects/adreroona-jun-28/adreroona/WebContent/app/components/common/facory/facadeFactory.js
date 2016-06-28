var app = angular.module('facadeFactory', []);
    
app.factory('facadeFactory', function(){
    return {
        getEngagementQuestions: function(){
        	 var promise = $http.get('app/components/common/resources/questions.json');
             promise.then(function (response) {
            	 resolveObj.questions = response.data.questions;
            	 successCb(resolveObj);
             },
             function(reason) {
                // alert('Failed');
                 successCb(resolveObj);
             });
        } 
    }               
});