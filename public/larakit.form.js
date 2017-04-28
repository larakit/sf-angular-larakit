angular.module('larakit.form', [
    'uiSwitch',
    'ui.select',
    'ngQuill'
]);

angular.module('larakit.form')
    .filter('toDate', function () {
        return function (input) {
            return new Date(input);
        }
    });