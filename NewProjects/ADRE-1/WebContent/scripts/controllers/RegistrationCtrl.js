(function(angular, _) {
    "use strict"
    angular.module('engagementScreen', [])
        .controller("RegistrationCtrl", RegistrationCtrl);

    function RegistrationCtrl($scope, $window) {
        $scope.$on('$locationChangeStart', function(scope, next, current) {
            if (!$window.confirm('Are you sure you want to leave the Engagement screen? Any data collected thus far will be lost')) {
                scope.preventDefault();
            }
        });
    }

})(window.angular);