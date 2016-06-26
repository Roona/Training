(function (angular, _) {
    "use strict"
    var eng = angular.module('engagementCtrl', ['eaiData', 'escSecurity', 'engagement','IAListService']);
    eng.controller("EngagementCtrl", EngagementCtrl);

    function EngagementCtrl(Engagement, EaiFactory, $http, $filter, jsonFilter,IAListService,resolveObj) {
        self = this;
        self.Engagement = Engagement;
        IAListService.initialize(resolveObj.iaNames);
        self.saveEngagement = function () {
            var params = {
                configName: Engagement.configName,
                configOwnerEmpNo: '897579',
                itgField: Engagement.itgField,
                mgrField: Engagement.mgrField,
                targetDate: Engagement.targetDate,
                configDisplayName: Engagement.configName,
                configOwner: 'Apurv Mahajan',
                eai: Engagement.eai,
                adre_proj_desc: Engagement.projectDescription,
                passIDField: Engagement.passIDField
            };
            alert('params - ' + jsonFilter(params));
            alert(Engagement.assignedIa);
            $http.post('http://localhost:8090/GateWayService/rest/CommonServiceInterface/save', jsonFilter(params))
                .then(function successCallback(response) {
                    alert('Saved Successfully');
                },
                function errorCallback(response) {
                    alert('Error Reported');
                    console.log("ADRE Error saving data" + response);
                });
        }

        self.createEngagement = function () {
            alert("Comming Soon!");
        }

        self.cancelEngagement = function () {
            alert("Comming Soon!");
        }
        
    }

})(window.angular);