(function (angular, _) {
    "use strict"
    var eng = angular.module('engagementCtrl', ['eaiData', 'escSecurity']);
    eng.controller("EngagementCtrl", EngagementCtrl);
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

    function EngagementCtrl($scope, Engagement, EaiFactory, $http, $filter, jsonFilter) {
        $scope.Engagement = Engagement;
        $scope.eai;
        $scope.addedEais;
        $scope.date;
        $scope.minDate = new Date() + 7;
        $scope.targetDate = new Date(Engagement.targetDate);
        $scope.targetDateError;
        $scope.isManagerError;
        $scope.eaiRec = [];
        $scope.eaiError;
        $scope.hostname;
        $scope.selectedEai = [];
        $scope.selectedHost;
        $scope.iaNames = [];
        $scope.addedIaNames = [];
        $scope.removeIas = [];
        // table sorting and filtering
        $scope.sortEaiType = 'eaiNumber';
        $scope.sortEaiReverse = false;
        $scope.searchEai = '';

        $scope.updateTargetDate = function () {
            Engagement.targetDate = $scope.targetDate;
        };
        
        $scope.getEaiInfo = function() {
            for(var e in Engagement.eai){
                EaiFactory.getEai(Engagement.eai[e])
                .then(function (result) {
                    $scope.eaiRec.push(result);    
                },
                function(error) {
                    console.log(error.statusText);
                });
            }
        }
        
        $scope.eaiChecked = function(index) {
            var idx = $scope.selectedEai.indexOf(index);
            if(idx != -1){
                $scope.selectedEai.splice(idx, 1);
            } else {
                $scope.selectedEai.push(index);
            }
       }

        $scope.getITG = function () {
            $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/symphony/validateITG/' + $scope.Engagement.itgField)
                .then(function successCallback(response) {
                    if (response.data.configNameExists && $scope.Engagement.dataDetails.itgField) {
                        // valid ITG 128302
                        $scope.Engagement.dataDetails.itgField = response.data.statusCode;
                    } else {
                        $scope.itgError = response.data.failReason;
                    }
                },
                function errorCallback(response) {
                    console.log("ADRE Error validating ITG" + response);
                });
        }

        $scope.isManager = function () {
            var params = {
                mgrField: Engagement.mgrField
            };
            $http.post('http://localhost:8090/GateWayService/rest/CommonServiceInterface/search/' , jsonFilter(params))
                .then(function successCallback(response) {
                    if (response.data.managerList && response.data.managerList.length > 0) {
                        $scope.Engagement.mgrField = response.data.managerList[0].displayname;
                    } else {
                        $scope.isManagerError = response.data.failReason;
                    }
                },
                function errorCallback(response) {
                    console.log("ADRE Error finding manager information" + response);
                });
        }
        
        $scope.getIaList = function() {
            $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/getMemberListForRole/adre_architect_role')
                .then(function successCallback(response) {
                    if (response.data.members) {
                        $scope.iaNames = response.data.members;
                    } else {
                        $scope.isIaError = response.data.failReason;
                    }
                },
                function errorCallback(response) {
                    console.log("ADRE Error getting architect user information" + response);
                });
        }

        $scope.addCustomEai = function () {
            EaiFactory.getEai($scope.eai)
                .then(function (result){
                    $scope.eaiRec.push(result);    
                },
                function(error){
                    $scope.isEaiError = error.data.failReason;
                });
                // Clear input fields after push
                $scope.eai = "";
        }
        
        $scope.removeEai = function () {
            $scope.selectedEai.reverse();
            for(var eai in $scope.selectedEai){
                $scope.eaiRec.splice($scope.selectedEai[eai], 1);
                //clear selectedEai
            }
            $scope.selectedEai = [];
        }

        $scope.addHostname = function () {
            if ($scope.hostname) {
                Engagement.hostnames.push($scope.hostname);

                // Clear input fields after push
                $scope.hostname = "";
            }
        }

        $scope.removeHost = function () {
            for(var host in $scope.selectedHost){            
                var index = Engagement.hostnames.indexOf($scope.selectedHost[host]);
                if (index != -1) {
                    Engagement.hostnames.splice(index, 1);
                }
            }
        }
        
        $scope.saveEngagement = function () {
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

        $scope.createEngagement = function () {
            alert("Comming Soon!");
        }

        $scope.cancelEngagement = function () {
            alert("Comming Soon!");
        }

        $scope.moveAll = function(from, to, src) {
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