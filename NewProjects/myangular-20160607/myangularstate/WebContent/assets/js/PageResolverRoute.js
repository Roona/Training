/**
 * @author 		:	Roona
 * @Date 		:	June, 6 , 2016
 * @FileName	:	PageResolver.js
 */


var pageResolver = function ($q, $route, $timeout,pageName) {
    var deferred = $q.defer();
    
    if(pageName != undefined){
    //alert(pageName);
    }

    var page = $route.current.params.page;
    
    // success call back function
    var successCb = function (result) {
    	
    	// analyze result obj for error condition 
        if (angular.equals(result, [])) {
            deferred.reject("Page not found :"+ page);
        }
        else {
            deferred.resolve(result);
        }
    };
    //the timeout is only to exaggerate the example, it's completely unnecessary
    $timeout(function () {
    	
    	if(pageName == 'engagement'){
    		/// get data from web service
    		getNextPageForEngagement(pageName, successCb);
    		
    		
    	}else if(pageName == 'capacity'){
    		
    		getNextPageObject(pageName, successCb);
    		
    	} else{
    		
    		getNextPageObject(page, successCb);
    		
    	}
    	
    }, 2000);

    return deferred.promise;
}


var getNextPageObject = function (pageName, successCb, failCb) {
    // var queryObj = {city:cityQuery};
    // var query = JSON.stringify(queryObj);
	//alert(pageName);
     var mainObj = [{result:"success",page:pageName}];
     if(pageName=='dummy'){
    	 mainObj=[]; 
     }
     return successCb(mainObj);
 };
 
 
 var getNextPageForEngagement  = function (pageName, successCb, failCb) {
	   // web service call to get JSON Object
	     var mainObj = [{result:"success",page:pageName}];
	     if(pageName=='dummy'){
	    	 mainObj=[]; 
	     }
	     return successCb(mainObj);
};