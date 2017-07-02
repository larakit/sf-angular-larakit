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
        .filter('nl2br', function ($sce) {
            return function (msg, is_xhtml) {
                var is_xhtml = is_xhtml || true;
                var breakTag = (is_xhtml) ? '<br />' : '<br>';
                var msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
                return $sce.trustAsHtml(msg);
            }
        });
})();