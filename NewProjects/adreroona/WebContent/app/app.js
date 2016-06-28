(function(angular) {
    "use strict"
	
		
	var engagementQuestionsModule = angular.module('engagementQuestionsModule',['questionsCtrl', 'engagementQuestions']);
	
	var capacityQuestionsModule = angular.module('capacityQuestionsModule',['capQuestionsCtrl', 'capacityQuestions']);
	
	var engagementModule = angular.module('engagementModule',['engagementCtrl', 'engagementTabCtrl','engagementForm']);
	
	var engagementTabModule = angular.module('engagementTabModule',['engagementQuestionsModule', 'capacityQuestionsModule','engagementModule']);
	
	var projectLaunchModule = angular.module('projectLaunchModule',['projectLaunchCtrl', 'projectLaunchMain','engagementTabModule']);
    
/*    var app = angular.module('adre', ['ui.router', 'projectLaunchCtrl', 'projectLaunchMain', 'questionsCtrl', 'engagementQuestions',
        'capQuestionsCtrl', 'capacityQuestions','engagementCtrl', 'engagementForm','engagementTabCtrl','AdreCtrlModule']);*/
	
	var commonModule = angular.module('commonModule', ['ui.router','AdreCtrlModule']);
	
	var app = angular.module('adre', ['commonModule','projectLaunchModule']);
    
    app.config(StateConfig);
      
})(window.angular);