/**
 * @author 		:	Roona
 * @Date 		:	June, 6 , 2016
 * @FileName	:	PageResolver.js
 */


var pageResolverState = function ($q, $state, $timeout,pageName) {
    var deferred = $q.defer();
    
    displayProgress();
    //var pageName = '';
    
    if(pageName != undefined){
    //alert(pageName);
    }
    
    // success call back function
    var successCb = function (result) {
    	
    	// analyze result obj for error condition 
        if (angular.equals(result, [])) {
            deferred.reject("Page not found ");
        }
        else {
            deferred.resolve(result);
        }
    };
    //the timeout is only to exaggerate the example, it's completely unnecessary
    $timeout(function () {
    	
    	if(pageName == 'engagement'){
    		/// get data from web service
    		getNextPageForEngagement(successCb);
    		
    		
    	} else{
    		
    		getNextPageObject( pageName,successCb);
    		
    	}
    	
    }, 2000);

    return deferred.promise;
}


var getNextPageObject = function (pageName,successCb, failCb) {
   
     var mainObj = [{result:"success"}];
     if(pageName==undefined){
    	 mainObj=[]; 
     }
     return successCb(mainObj);
 };
 
 
 var getNextPageForEngagement  = function (successCb, failCb) {
	   // web service call to get JSON Object
	     var mainObj = [{result:"success"}];
	     mainObj.field1 = adreConstants.ABOUT_US;
	     mainObj.field2 = adreConstants.WHAT_WE_DO;
	     mainObj.field3 = adreConstants.WHY_WE_CHOOOSE;
	     return successCb(mainObj);
};