(function (angular, _) {
    "use strict"
    var etc = angular.module('engagementTabCtrl', ['engagement']);
    etc.controller("EngagementTabCtrl", EngagementTabCtrl);

    function EngagementTabCtrl(Engagement) {
        self = this;
        self.Engagement = Engagement;
        
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

    }

})(window.angular);