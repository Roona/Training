
/**
 * @author 		:	Roona
 * @Date 		:	June, 6 , 2016
 * @FileName	:	StateConfig.js
 * @info 		:	pageResolverState available in PageResolverState.js
 */


var StateConfig = function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('#/');
    
    
    var _controller = function ($scope, $stateParams, modelObj) {
        $scope.mainObj = modelObj;        
     };
     
     var _resolve =function ($q, $state, $timeout){
        	return pageResolverState ($q, $state, $timeout);
     };
     
    
    var home = {
            name: '#/',
            url: '/',
            templateUrl: 'pages/home.html',
            pageName :"home"
        };
    
    
    var engagement = {
            name: '#/engagement',
            url: '/engagement',
            templateUrl: 'pages/engagement.html',
            pageName :"engagement",
            controller:function ($scope, $stateParams, modelObj) {
                $scope.mainObj = modelObj;        
            },
            resolve :{ 
            
                   modelObj: function ($q, $state, $timeout){
                	  var page = $state.current.pageName;
                   	return pageResolverState ($q, $state, $timeout);
                   }
            }    
        };
    
    var capacity = {
            name: '#/capacity',
            url: '/capacity',
            templateUrl: 'pages/capacity.html',
            pageName :"capacity",
            controller: _controller,
            resolve :{        	
                   modelObj: _resolve
            }    
        };
    
    var login = {
            name: '#/login',
            url: '/',
            templateUrl: 'pages/pagenotfound.html',
            pageName :"login",
            controller: _controller,
            resolve :{        	
                   modelObj: _resolve
            }    
        };
    
    $stateProvider    
    	.state(home)
        .state(engagement)
        .state(capacity)
        .state(login);
         
        
};
 
