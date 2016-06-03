(function(angular, _) {
    "use strict"
    var prj =angular.module('projectLaunchMainCtrl', ['engagementData', 'engagement']);
    prj.controller("ProjectLaunchMainCtrl", ProjectLaunchMainCtrl);

    function ProjectLaunchMainCtrl($scope, EngagementFactory, Engagement, filterFilter) {    
        self = this;    
        self.myProjects = "";
        self.selectedEngagement = '';
        self.Engagement = Engagement;
        // table sorting and filtering
        self.sortPrjType = 'configName';
        self.sortPrjReverse = false;
        self.searchPrj = '';
        
        self.setSelectedEngagement = function(val) {
            self.selectedEngagement = val;
            Engagement.initialize(self.selectedEngagement);
            self.Engagement = Engagement;
        }

        self.getProject = function() {
            EngagementFactory.getEngagements('473605')
                .then(function (response) {
                    self.myProjects = response;
                },
                function(error) {
                    
                });
        };
        
        // self.clear = function() {
        //     Engagement.clear();
        // };
    }

})(window.angular);