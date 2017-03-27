angular
    .module('larakit.form')
    .component('formfieldCheckbox', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-checkbox.html',
        transclude: true,
        bindings: {
            error: '=',
            desc: '=',
            label: '=',
            model: '='
        }
    });