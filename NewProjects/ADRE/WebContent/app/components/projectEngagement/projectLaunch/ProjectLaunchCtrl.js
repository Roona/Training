(function(angular, _) {
    "use strict"
    var prj =angular.module('projectLaunchCtrl', ['engagementData', 'engagement']);
    prj.controller("ProjectLaunchCtrl", ProjectLaunchCtrl);

    function ProjectLaunchCtrl(Engagement) {    
        self = this;    
        self.Engagement = Engagement;
        
        self.clear = function() {
            Engagement.clear();
        };
    }

})(window.angular);