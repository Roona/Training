/**
 * @author 		:	Roona
 * @Date 		:	June, 8 , 2016
 * @FileName	:	PageResolver.js
 */


var pageResolverState = function ($http,$q, $state, $timeout,pageName) {
    var deferred = $q.defer();
    
    displayProgress();
    //var pageName = '';
    
    if(pageName != undefined){
    //alert(pageName);
    }
    
    // success call back function
    var successCb = function (mainObj) {
    	
    	// analyze result obj for error condition 
        if (mainObj == undefined || mainObj == null || mainObj.result != 'success') {
            deferred.reject("Page not found ");
        }
        else {
            deferred.resolve(mainObj);
        }
    };
    //the timeout is only to exaggerate the example, it's completely unnecessary
   // $timeout(function () {
    	
    	getNextPageObject($http,pageName,successCb);
    	
   // }, 500);

    return deferred.promise;
}


var getNextPageObject = function ($http,pageName,successCb, failCb) {
	// webservices
     var mainObj = {result:"success"};
     if(pageName==undefined){
    	 mainObj={result:"failure"}; 
     }
     
    if(pageName == 'CapacityQuestionsScreen'){
    	 
    	 var promise = $http.get('app/components/common/resources/capQuestions.json');
         promise.then(function (response) {
        	 mainObj.capQuestions = response.data.questions;
        	 successCb(mainObj);
         },
         function(reason) {
            // alert('Failed');
             successCb(mainObj);
         });
     }
     
     
     
    else if(pageName =='QuestionsScreen'){
    	 
    	 var promise = $http.get('app/components/common/resources/questions.json');
         promise.then(function (response) {
        	 mainObj.questions = response.data.questions;
        	 successCb(mainObj);
         },
         function(reason) {
            // alert('Failed');
             successCb(mainObj);
         });
     } 
    else{
    	successCb(mainObj);
    }
     //return successCb(mainObj);
 };
 
 
