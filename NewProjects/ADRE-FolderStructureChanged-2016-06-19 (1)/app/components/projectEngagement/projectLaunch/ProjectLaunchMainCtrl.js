(function(angular, _) {
    "use strict"
    var prj =angular.module('projectLaunchMainCtrl', ['webserviceFactory', 'engagement']);
    prj.controller("ProjectLaunchMainCtrl", ProjectLaunchMainCtrl);

    function ProjectLaunchMainCtrl(WebserviceFactory, Engagement, filterFilter) {    
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
            // var promise = EngagementFactory.getPromise('473605');
            var promise = WebserviceFactory.getPromise('app/components/common/resources/fileload.json');
            promise.then(function (response) {
                self.myProjects = response.data.configDetailList;
            },
            function(reason) {
                alert('Failed');
            });
        };
        
        // self.clear = function() {
        //     Engagement.clear();
        // };
    }

})(window.angular);