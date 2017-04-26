angular.module('larakit.form', ['uiSwitch', 'ui.select']);

angular.module('larakit.form')
    .filter('toDate', function () {
        return function (input) {
            return new Date(input);
        }
    });