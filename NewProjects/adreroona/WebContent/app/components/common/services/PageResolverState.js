/**
 * @author 		:	Roona
 * @Date 		:	June, 8 , 2016
 * @FileName	:	PageResolver.js
 */


var pageResolverState = function ($http,$q, $state, $timeout,pageName) {
    var deferred = $q.defer();
    
    // starts progress bar
    displayProgress();
    //var pageName = '';
    
    if(pageName != undefined){
    //alert(pageName);
    }
    
    // success call back function
    var successCb = function (resolveObj) {
    	
    	// analyze result obj for error condition 
        if (resolveObj == undefined || resolveObj == null || resolveObj.result != 'success') {
            deferred.reject("Page not found ");
        }
        else {
            deferred.resolve(resolveObj);
        }
    };
    //the timeout is only to exaggerate the example, it's completely unnecessary
   // $timeout(function () {
    	
    	getResolveObject($http,pageName,successCb);
    	
   // }, 500);

    return deferred.promise;
}


var getResolveObject = function ($http,pageName,successCb, failCb) {
	// webservices
     var resolveObj = {result:"success"};
     if(pageName==undefined){
    	 resolveObj={result:"failure"}; 
     }
     
     if(pageName == 'EngagementTabScreen'){
    	 var promise = $http.get('app/components/common/resources/iaList.json');
         promise.then(function (response) {
        	 resolveObj.iaNames = response.data.members;
        	 successCb(resolveObj);
         },
         function(reason) {
            // alert('Failed');
        	 resolveObj={result:"failure"}; 
             successCb(resolveObj);
         }); 
    	 
     }
     
     else if(pageName == 'CapacityQuestionsScreen'){
    	 
    	 var promise = $http.get('app/components/common/resources/capQuestions.json');
         promise.then(function (response) {
        	 resolveObj.capQuestions = response.data.questions;
        	 successCb(resolveObj);
         },
         function(reason) {
            // alert('Failed');
             successCb(resolveObj);
         });
     }
     
     
     
    else if(pageName =='QuestionsScreen'){
    	 
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
    else{
    	successCb(resolveObj);
    }
     //return successCb(resolveObj);
 };
 
 
 
var getEaiInfo = function(Engagement) {
	
     for(var e in Engagement.eai){
         EaiFactory.getEai(Engagement.eai[e])
         .then(function (result) {
             self.eaiRec.push(result);    
         },
         function(error) {
             console.log(error.statusText);
         });
     }
 }
