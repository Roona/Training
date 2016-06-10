
/**
 * @author 		:	Roona
 * @Date 		:	June, 6 , 2016
 * @FileName	:	RouteConfig.js
 * @info 		:	pageResolver available in PageResolver.js
 */

 
var RouteConfig= function ($locationProvider, $routeProvider) {
	
    $routeProvider.when("/", {templateUrl:"pages/home.html", controller:""})
    
    .when("/engagement", {
    	
    	templateUrl: "pages/engagement.html",
       
        controller :function ($scope, $routeParams, modelObj) {
         $scope.mainObj = modelObj;
         
         $scope.mainObj.field1 = adreConstants.ABOUT_US;
         $scope.mainObj.field2 = adreConstants.WHAT_WE_DO;
         $scope.mainObj.field3 = adreConstants.WHY_WE_CHOOOSE;
           
        },
        resolve    :{        	
            modelObj: function ($q, $route, $timeout){
            	return pageResolver ($q, $route, $timeout,"engagement");
            }
        }
    }).when("/capacity", {
    	
    	templateUrl: "pages/capacity.html",
       
        controller :function ($scope, $routeParams, modelObj) {
         $scope.mainObj = modelObj;
         
         $scope.mainObj.field1 = " capacity 1";
         $scope.mainObj.field2 = " Capacity 2";
           
        },
        resolve    :{        	
            modelObj: function ($q, $route, $timeout){
            	return pageResolver ($q, $route, $timeout,"capacity");
            }
        }
    }).when("/:page", {
    	
    	// when("/pages/engagement?:userid
    	templateUrl: "pages/pagenotfound.html",
       
        controller :function ($scope, $routeParams, modelObj) {
         $scope.mainObj = modelObj;
           
        },
        resolve    :{        	
            modelObj: function ($q, $route, $timeout){
            	return pageResolver ($q, $route, $timeout);
            }
        }
    })
   
};