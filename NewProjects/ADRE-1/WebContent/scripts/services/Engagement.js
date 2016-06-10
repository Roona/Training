(function(angular, _) {
    "use strict"
    angular.module('engagement', [])

        .service('Engagement', function Engagement() {
            var Engagement = this;
            Engagement.registrationKey = "";
            Engagement.configStatus = ""
            Engagement.lastModifiedDateTime = "";
            Engagement.passIDField = "";
            Engagement.itgField = "";
            Engagement.mgrField = "";
            Engagement.configName = "";
            Engagement.configOwner = "";
            Engagement.configOwnerEmpNo = "";
            Engagement.configDisplayName = "";
            Engagement.projectDescription = "";
            Engagement.targetDate = "";
            Engagement.eai = [];
            Engagement.assignedIa;
            Engagement.hostnames = [];
            Engagement.questions = [];
            Engagement.capQuestions = [];
            //To help control visable aspects of the screen based on the type of engagement
            Engagement.capacityEngagement = false;
            Engagement.isRegistration = false; 
            
            this.initialize = function(engagement){
                if(engagement){
                    this.clear();
                    Engagement.registrationKey = engagement.registrationKey;
                    Engagement.configStatus = engagement.configStatus;
                    Engagement.configName = engagement.configName;
                    // Engagement.configDisplayName = 
                    Engagement.questions = engagement.engagementQuestions;
                    Engagement.capQuestions = engagement.capacityPlanData.capacityPlanQuestions;
                    Engagement.itgField = engagement.dataDetails.itgField;
                    Engagement.mgrField = engagement.dataDetails.mgrField;
                    Engagement.projectDescription = engagement.dataDetails.projectDescription;
                    Engagement.targetDate = Date(engagement.dataDetails.targetDate, 'MM/dd/yyyy');
                    
                    for(var e in engagement.dataDetails.eai){
                        Engagement.eai.push(engagement.dataDetails.eai[e]);
                    }
                    for(var h in engagement.capacityPlanData.serverHostNames){
                        Engagement.hostnames.push(engagement.capacityPlanData.serverHostNames[h]);
                    }
                    // Engagement.assignedIa;
                }
            };
            this.clear = function(){
                Engagement.registrationKey = "";
                Engagement.configName = "";
                Engagement.itgField = "";
                Engagement.mgrField = "";
                Engagement.projectDescription = "";
                Engagement.targetDate = "";
                Engagement.eai = [];
                Engagement.hostnames = [];
                Engagement.questions = [];
                Engagement.capQuestions = [];
                Engagement.capacityEngagement = false;
                Engagement.assignedIa = "";
                Engagement.isRegistration = false;
            };
            
        });
})(window.angular);