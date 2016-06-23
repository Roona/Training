(function(angular, _) {
    "use strict"
    angular.module('EngagementTabService', [])

        .service('EngagementTabService', function EngagementTabService() {
            var self = this;     
           
            self.tabs = [
                         
                         {
                             title:adreConstants.TAB_ENGAGEMENT_QUES,
                             id :"engagementQues",
                             url  :".engagementTabEngQues",
                             newUrl :"/EngagementTab/engagementTabEngQues",
                             visible : true
                         },
                         {
                             title:adreConstants.TAB_CAPACITY_QUES,
                             id :"capacityQues",
                             url  :".engagementTabCapQues",
                             newUrl :"/EngagementTab/engagementTabCapQues",
                             visible : false
                         },
                         {
                             title:adreConstants.TAB_ENAGAGEMENT_TAB,
                             id :"engagement",
                             url  :".engagementTabEngagement",
                             newUrl :"/EngagementTab/engagementTabEngagement",
                             visible : true
                         }
                     ];
            
          /*  
            // Function to set active engagement tab 
            EngagementTabService.checkActive = function (newU) {
                if (newUrl ==   $scope.newLocation) {
                    return "btn-primary";
                } else {
                    return "";
                }
            };*/
            
        });
})(window.angular);