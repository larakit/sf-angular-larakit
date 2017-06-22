(function () {
    angular
        .module('larakit',

            [
                "ngNamedRoute",
                "ui.tree",
                "ui.bootstrap",
                "ngSanitize",
                "ngResource",
                "ngRoute",
                "ngCookies",
                "rzModule",
                "cfp.hotkeys",
                "larakit.form",
                "larakit.entity"
            ]);
    angular
        .module('larakit')
        .factory('safeApply', [function ($rootScope) {
            return function ($scope, fn) {
                var phase = $scope.$root.$$phase;
                if (phase == '$apply' || phase == '$digest') {
                    if (fn) {
                        $scope.$eval(fn);
                    }
                } else {
                    if (fn) {
                        $scope.$apply(fn);
                    } else {
                        $scope.$apply();
                    }
                }
            }
        }])
})();