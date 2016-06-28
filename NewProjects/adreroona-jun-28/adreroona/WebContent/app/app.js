(function(angular) {
    "use strict"
	
	var projectLaunchModule = angular.module('projectLaunchModule',['projectLaunchCtrl', 'projectLaunchMain']);
	var engagementQuestionsModule = angular.module('engagementQuestionsModule',['questionsCtrl', 'engagementQuestions']);
	var capacityQuestionsModule = angular.module('capacityQuestionsModule',['capQuestionsCtrl', 'capacityQuestions']);
	var engagementModule = angular.module('engagementModule',['engagementCtrl', 'engagementForm','engagementTabCtrl']);
	
    
/*    var app = angular.module('adre', ['ui.router', 'projectLaunchCtrl', 'projectLaunchMain', 'questionsCtrl', 'engagementQuestions',
        'capQuestionsCtrl', 'capacityQuestions','engagementCtrl', 'engagementForm','engagementTabCtrl','AdreCtrlModule']);*/
	
	var app = angular.module('adre', ['ui.router','projectLaunchModule','engagementQuestionsModule',
	                                    'capacityQuestionsModule','engagementModule','AdreCtrlModule']);
    
    app.config(StateConfig);
      
})(window.angular);