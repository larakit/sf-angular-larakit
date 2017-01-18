angular.module('larakit.form', []);

angular.module('larakit.form')
    .filter('toDate', function () {
        return function (input) {
            return new Date(input);
        }
    });