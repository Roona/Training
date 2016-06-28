
/**
 * @author 		:	Roona
 * @Date 		:	June, 23 , 2016
 * @FileName	:	StateConfig.js
 * @info 		:	pageResolverState available in PageResolverState.js
 */


var StateConfig = function($stateProvider, $urlRouterProvider) {
	
	/* home page url changed for all tabs to make selected tab work*/
    var home = {
            name: '/Home',
            url: '/Home',
            templateUrl: 'app/components/home/Home.html'
        };
    
    var projectLaunch = {
            name: '/ProjectLaunch',
            url: '/ProjectLaunch',
            templateUrl: 'app/components/projectEngagement/projectLaunch/ProjectLaunch.html',
            controller: 'ProjectLaunchCtrl',
            controllerAs: 'plc'
        };
    
    var capacity = {
            name: '/Capacity',
            url: '/Capacity',
            templateUrl: 'app/components/capacity/Capacity.html'
        };
    
    var managerMatrix = {
            name: '/ManagerMatrix',
            url: '/Admin',
            templateUrl: 'app/components/admin/ManagerMatrix.html'
        };
    
    var help = {
            name: '/Help',
            url: '/Help',
            templateUrl: 'app/components/help/Help.html'
        };
    
    var engagementTab = {
            name: 'EngagementTab',
            url: '/EngagementTab',
            templateUrl: 'app/components/projectEngagement/engagementTab/EngagementTab.html',
            controller: 'EngagementTabCtrl',
            controllerAs: 'etc',
            resolve    :{        	
            	resolveObj: function ($http,$q, $state, $timeout,$stateParams){
                   	return pageResolverState ($http,$q, $state, $timeout,'EngagementTab');
                   }
            }    
        };
    
    var engagementTabEngQues = {
            name: 'EngagementTab.engagementTabEngQues',
            url: '/engagementTabEngQues',
            templateUrl: 'app/components/projectEngagement/engagementQuestions/Questions.html',
            controller: 'QuestionsCtrl',
            controllerAs: 'qc',
            resolve    :{        	
          	   resolveObj: function ($http,$q, $state, $timeout,$stateParams){
                    	return pageResolverState ($http,$q, $state, $timeout,'QuestionsScreen');
                    }
            }   
        };
    
    var engagementTabCapQues = {
            name: 'EngagementTab.engagementTabCapQues',
            url: '/engagementTabCapQues',
            templateUrl: 'app/components/projectEngagement/capacityQuestions/CapacityQuestions.html',
            controller: 'CapQuestionsCtrl',
            controllerAs: 'cqc',
            resolve    :{        	
            	resolveObj: function ($http,$q, $state, $timeout,$stateParams){
                    	return pageResolverState ($http,$q, $state, $timeout,'CapacityQuestionsScreen');
                    }
            }   
        };
    
    var engagementTabEngagement = {
            name: 'EngagementTab.engagementTabEngagement',
            url: '/engagementTabEngagement',
            templateUrl: 'app/components/projectEngagement/engagement/Engagement.html',
            controller: 'EngagementCtrl',
            controllerAs: 'ec',
            resolve    :{        	
            	resolveObj: function ($http,$q, $state, $timeout,$stateParams){
                    	return pageResolverState ($http,$q, $state, $timeout,'EngagementTabScreen');
                    }
            }   
        };
    
    var error = {
            name: 'error',
            url: 'error',
            templateUrl: 'app/components/error/pagenotfound.html',
            resolve: {
                errorObj: [function () {
                    return this.self.error;
                }]
            },
            controller: function ($scope, $stateParams, errorObj) {
                $scope.mainObj = errorObj;
            }  
        };
    
	$urlRouterProvider.otherwise('/Home')
    $stateProvider
        .state(home)
        .state(projectLaunch)
        .state(capacity)
        .state(managerMatrix)
        .state(help)
        .state(engagementTab)
        .state(engagementTabEngQues)
        .state(engagementTabCapQues)
        .state(engagementTabEngagement)
        .state(error)      

};
 
