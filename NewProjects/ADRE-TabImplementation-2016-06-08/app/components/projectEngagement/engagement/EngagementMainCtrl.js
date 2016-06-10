(function (angular, _) {
    "use strict"
    var eng = angular.module('engagementMainCtrl', ['eaiData', 'escSecurity', 'engagement']);
    eng.controller("EngagementMainCtrl", EngagementMainCtrl);
    // directive prevents page jumping to top when href is clicked
    eng.directive('a', function() {
        return {
            restrict: 'E',
            link: function(scope, elem, attrs) {
                if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                    elem.on('click', function(e){
                        e.preventDefault();
                    });
                }
            }
        };
    });

    function EngagementMainCtrl(Engagement, EaiFactory, $http, $filter, jsonFilter) {
        self = this;
        self.Engagement = Engagement;
        self.eai;
        self.addedEais;
        self.date;
        self.minDate = new Date() + 7;
        self.targetDate = new Date(Engagement.targetDate);
        self.targetDateError;
        self.isManagerError;
        self.eaiRec = [];
        self.eaiError;
        self.hostname;
        self.selectedEai = [];
        self.selectedHost;
        self.iaNames = [];
        self.addedIaNames = [];
        self.removeIas = [];
        // table sorting and filtering
        self.sortEaiType = 'eaiNumber';
        self.sortEaiReverse = false;
        self.searchEai = '';

        self.updateTargetDate = function () {
            Engagement.targetDate = self.targetDate;
        };
        
        self.getEaiInfo = function() {
            for(var e in Engagement.eai){
                EaiFactory.getEai(Engagement.eai[e])
                .then(function (result) {
                    self.eaiRec.push(result);    
                },
                function(error) {
                    console.log(error.statusText);
                });
            }
        }
        
        self.eaiChecked = function(index) {
            var idx = self.selectedEai.indexOf(index);
            if(idx != -1){
                self.selectedEai.splice(idx, 1);
            } else {
                self.selectedEai.push(index);
            }
       }

        self.getITG = function () {
            $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/symphony/validateITG/' + self.Engagement.itgField)
                .then(function successCallback(response) {
                    if (response.data.configNameExists && self.Engagement.dataDetails.itgField) {
                        // valid ITG 128302
                        self.Engagement.dataDetails.itgField = response.data.statusCode;
                    } else {
                        self.itgError = response.data.failReason;
                    }
                },
                function errorCallback(response) {
                    console.log("ADRE Error validating ITG" + response);
                });
        }

        self.isManager = function () {
            var params = {
                mgrField: Engagement.mgrField
            };
            $http.post('http://localhost:8090/GateWayService/rest/CommonServiceInterface/search/' , jsonFilter(params))
                .then(function successCallback(response) {
                    if (response.data.managerList && response.data.managerList.length > 0) {
                        self.Engagement.mgrField = response.data.managerList[0].displayname;
                    } else {
                        self.isManagerError = response.data.failReason;
                    }
                },
                function errorCallback(response) {
                    console.log("ADRE Error finding manager information" + response);
                });
        }
        
        self.getIaList = function() {
            $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/getMemberListForRole/adre_architect_role')
            // $http.get('app/components/common/resources/iaList.json')
                .then(function successCallback(response) {
                    if (response.data.members) {
                        self.iaNames = response.data.members;
                    } else {
                        self.isIaError = response.data.failReason;
                    }
                },
                function errorCallback(response) {
                    console.log("ADRE Error getting architect user information" + response);
                });
        }

        self.addCustomEai = function () {
            EaiFactory.getEai(self.eai)
                .then(function (result){
                    self.eaiRec.push(result);    
                },
                function(error){
                    self.isEaiError = error.data.failReason;
                });
                // Clear input fields after push
                self.eai = "";
        }
        
        self.removeEai = function () {
            self.selectedEai.reverse();
            for(var eai in self.selectedEai){
                self.eaiRec.splice(self.selectedEai[eai], 1);
                //clear selectedEai
            }
            self.selectedEai = [];
        }

        self.addHostname = function () {
            if (self.hostname) {
                Engagement.hostnames.push(self.hostname);

                // Clear input fields after push
                self.hostname = "";
            }
        }

        self.removeHost = function () {
            for(var host in self.selectedHost){            
                var index = Engagement.hostnames.indexOf(self.selectedHost[host]);
                if (index != -1) {
                    Engagement.hostnames.splice(index, 1);
                }
            }
        }
        
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

        self.moveAll = function(from, to, src) {
            angular.forEach(from, function(item) {
                var obj = angular.fromJson(item);
                var idx=from.indexOf(item);                
                if (idx != -1) {
                    to.push(angular.fromJson(item));                    
                }
                
                var len = src.length;
                for(var i = 0; i<len; i++){
                    if(src[i].fedexId == obj.fedexId){
                       src.splice(i, 1);
                       break; 
                    }
                }
            });
            from = [];
        };
    }

})(window.angular);