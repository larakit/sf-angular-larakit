angular
    .module('larakit.form')
    .component('formfieldRadio', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-radio.html',
        transclude: true,
        bindings: {
            error: '=',
            desc: '=',
            label: '=',
            model: '='
        }
    });