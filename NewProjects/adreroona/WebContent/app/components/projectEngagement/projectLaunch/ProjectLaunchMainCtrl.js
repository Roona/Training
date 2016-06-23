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
        self.sortPrjType = 'configStatus';
        self.sortPrjReverse = false;
        self.searchPrj = '';
        

        self.colHeader = [
                         {colName:"configName",displayname:"Config Name",field :"configName" },
                         {colName:"targetDate",displayname:" Target Date",field :"dataDetails.targetDate" },
                         {colName:"itg",displayname:" ITG",field :"dataDetails.itgField" },
                         {colName:"manager",displayname:"Manager",field :"supportAssignorName" },
                         {colName:"status",displayname:"Status",field :"configStatus" },
                         {colName:"reqDesc",displayname:"Request Desc",field :"capacityPlanData.requestDescription" }
                         
                         ];
        
        self.changeSort = function(colName){
        	self.sortPrjType = colName; 
        	self.sortPrjReverse = !self.sortPrjReverse;
        	
        };
        
        self.changeFilter = function($event, id, keyword){
        	
        	var checkbox = $event.target;
        	 if(checkbox.checked){
        		 self.searchPrj = keyword;
        	 } else{
        		 self.searchPrj = '';
        	 }
        	
        	
        }
        
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