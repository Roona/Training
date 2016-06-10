(function(angular, _) {
    "use strict"
    var prj =angular.module('projectLaunchCtrl', ['engagementData', 'engagement']);
    prj.controller("ProjectLaunchCtrl", ProjectLaunchCtrl);

    function ProjectLaunchCtrl($scope, EngagementFactory, Engagement, filterFilter) {        
        $scope.myProjects = "";
        $scope.selectedEngagement = '';
        $scope.dataPresent = true;
        Engagement.initialize($scope.selectedEngagement);
        $scope.Engagement = Engagement;
        // table sorting and filtering
        $scope.sortPrjType = 'configName';
        $scope.sortPrjReverse = false;
        $scope.searchPrj = '';
        
        $scope.setSelectedEngagement = function(val) {
            $scope.selectedEngagement = val;
        }
        
        $scope.$watch('selectedEngagement', function() {
            if($scope.selectedEngagement){
                $scope.dataPresent = false;
                Engagement.initialize($scope.selectedEngagement);
            }
        }, true);
        
        $scope.$watch('myProjects', function() {
            // this.filteredArray = filterFilter($scope.myProjects.configDetailList, 'Frank');
            //set the first data set as selected
            if($scope.myProjects.configDetailList) {
                $scope.selectedEngagement = $scope.myProjects.configDetailList[0];
            }
        }, true);

        $scope.getProject = function() {
            $scope.myProjects = new EngagementFactory('473605');
        };
        
        $scope.clear = function() {
            Engagement.clear();
        };
    }

})(window.angular);