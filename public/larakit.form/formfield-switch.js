angular
    .module('larakit.form')
    .component('formfieldSwitch', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-switch.html',
        transclude: true,
        bindings: {
            error: '=',
            desc: '=',
            label: '=',
            model: '='
        }
    });