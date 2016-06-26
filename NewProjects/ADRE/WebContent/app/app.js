(function(angular) {
    "use strict"
    
    var app = angular.module('adre', ['ui.router', 'projectLaunchCtrl', 'projectLaunchMain', 'questionsCtrl', 'engagementQuestions',
        'capQuestionsCtrl', 'capacityQuestions','engagementCtrl', 'engagementForm','engagementTabCtrl','AdreCtrlModule']);
    
    app.config(StateConfig);
      
})(window.angular);